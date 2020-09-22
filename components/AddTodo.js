import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
    const [text, setText] = React.useState("");

    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New todo..."
                onChangeText={changeHandler}
            />

            <Button
                color="coral"
                onPress={() => submitHandler(text)}
                title="Add Todo"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});
