import React from "react";
import {
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    FlatList,
    Alert,
} from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/Sandbox";

export default function App() {
    const [todos, setTodos] = React.useState([
        { text: "buy coffee", id: "1" },
        { text: "create an app", id: "2" },
        { text: "plan to switch", id: "3" },
        { text: "do not use Flatter", id: "4" },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id != key);
        });
    };

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, id: Math.random().toString() },
                    ...prevTodos,
                ];
            });
        } else {
            Alert.alert("OOPS!", "Todos must be over 3 chars long", [
                {
                    text: "Understood",
                    onPress: () => console.log("alert closed"),
                },
            ]);
        }
    };

    return (
        // <Sandbox />
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList
                            keyExtractor={(item) => item.id}
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    item={item}
                                    pressHandler={pressHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 40,
        flex: 1,
    },
    list: {
        marginTop: 20,
        flex: 1,
    },
});
