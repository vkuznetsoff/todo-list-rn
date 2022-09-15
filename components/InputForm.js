import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const InputForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const changeText = (text) => {
    setText(text);
  };
  const addHandle = () => {
    addTodo(text);
    setText("");
  };

  return (
    <View style={styles.inputform}>
      <Ionicons
        name="md-add-circle"
        size={24}
        color="black"
        onPress={addHandle}
      />
      <TextInput
        value={text}
        placeholder="Добавьте задачу"
        onChangeText={changeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputform: {
    flexDirection: "row",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default InputForm;
