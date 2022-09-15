import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Todo from "./Todo";
import InputForm from "./InputForm";
import { uniqid } from "uniqid";

export const COMPLITED = "complited";
export const ACTIVE = "active";
export const ALL = "all";

const initState = [
  {
    id: 1,
    text: "Дизайн",
    status: COMPLITED,
  },
  {
    id: 2,
    text: "Верстка",
    status: ACTIVE,
  },
  {
    id: 3,
    text: "Программирование",
    status: ACTIVE,
  },
];

const Todolist = () => {
  const [todos, setTodos] = useState(initState);

  const addTodo = (text) => {
    setTodos((todos) => {
      const newItem = {
        id: Math.random(999).toString(),
        text: text,
        status: ACTIVE,
      };
      return [newItem, ...todos];
    });
  };

  return (
    <View style={styles.todolist}>
      <Text style={styles.header}>Todo List</Text>

      <InputForm addTodo={addTodo} />

      <SafeAreaView>
        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo todo={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  todolist: {
    flexDirection: "column",
    height: "500%",
  },

  header: {
    fontSize: "26pt",
    fontWeight: "600",
    backgroundColor: "#ABEBC6",
    padding: 15,
    textAlign: "center",
  },
});

export default Todolist;
