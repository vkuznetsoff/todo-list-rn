import { StyleSheet, TextInput, View } from "react-native";
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
        size={40}
        color="black"
        onPress={addHandle}
        style={{ marginRight: 15 }}
      />
      <TextInput
        value={text}
        placeholder="Добавьте задачу"
        onChangeText={changeText}
        style={styles.inputtext}
        placeholderTextColor={"rgba(40, 55, 71, 0.4)"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputform: {
    flexDirection: "row",
    width: "60%",
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },

  inputtext: {
    fontSize: 22,
    borderBottomWidth: 1,
    borderColor: "rgba(40, 55, 71, 0.7)",
  },
});

export default InputForm;
