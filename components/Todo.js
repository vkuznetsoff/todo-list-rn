import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { COMPLITED } from "./utils/statuses";

const Todo = ({ todo, updateTodo, removeTodo }) => {
  const handlePress = () => {
    updateTodo(todo.id);
  };

  const removeHandle = () => {
    removeTodo(todo.id);
  };

  return (
    <View>
      <View style={styles.todoitem}>
        <TouchableOpacity>
          {todo.status === "complited" ? (
            <AntDesign
              name="checkcircleo"
              size={24}
              color="#D7DBDD"
              onPress={handlePress}
            />
          ) : (
            <Entypo
              name="circle"
              size={24}
              color="#D7DBDD"
              onPress={handlePress}
            />
          )}
        </TouchableOpacity>

        <View style={styles.item_content}>
          <Text
            style={[
              styles.item_text,
              {
                textDecorationLine:
                  todo.status === COMPLITED ? "line-through" : undefined,
              },
            ]}
          >
            {todo.text}
          </Text>
          <View style={styles.remove}>
            <Feather
              name="delete"
              size={24}
              color="#F1948A"
              onPress={removeHandle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoitem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "rgba(52, 73, 94, 0.8)",
  },

  item_content: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },

  remove: {},

  item_text: {
    color: "#D7DBDD",
    fontWeight: 500,
    fontSize: 20,
    marginLeft: 20,
  },
});

export default Todo;
