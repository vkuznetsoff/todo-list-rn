import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Todo from "./Todo";
import InputForm from "./InputForm";

import { styles } from "./styles";
import { ACTIVE, COMPLITED } from "./utils/statuses";

const initState = [
  {
    id: Math.random(999).toString(),
    text: "Создать список дел",
    status: ACTIVE,
  },
];

const Todolist = () => {
  const [todos, setTodos] = useState(initState);

  const groupCount = (status) =>
    todos.filter((todo) => todo.status === status).length;

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

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === COMPLITED ? ACTIVE : COMPLITED,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.todolist}>
      <ImageBackground
        style={styles.bg_image}
        resizeMode="cover"
        source={require("../assets/img/bgwood.jpg")}
      >
        <Text style={styles.header}>Список дел</Text>

        <InputForm addTodo={addTodo} />

        <View style={styles.todolist_content}>
          <FlatList
            data={todos}
            renderItem={({ item }) =>
              item.status === ACTIVE ? (
                <Todo
                  todo={item}
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}
                />
              ) : undefined
            }
            keyExtractor={(item) => item.id}
            style={styles.flatlist}
          />

          <View style={styles.bottom}>
            {groupCount(COMPLITED) !== 0 ? (
              <Text style={styles.bottom_header}>Завершенные</Text>
            ) : undefined}

            <FlatList
              data={todos}
              renderItem={({ item }) =>
                item.status === COMPLITED ? (
                  <Todo
                    todo={item}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                  />
                ) : undefined
              }
              keyExtractor={(item) => item.id}
              style={styles.flatlist}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Todolist;
