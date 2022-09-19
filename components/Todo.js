import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Todo = ({ todo }) => {
  return (
    <TouchableOpacity>
      <View style={styles.todoitem}>
        {todo.status === "complited" ? (
          <AntDesign name="checkcircleo" size={24} color="#D7DBDD" />
        ) : (
          <Entypo name="circle" size={24} color="#D7DBDD" />
        )}
        <Text style={styles.item_text}>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoitem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    // textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "rgba(52, 73, 94, 0.8)",
  },

  item_text: {
    color: "#D7DBDD",
    fontWeight: 500,
    fontSize: 20,
    marginLeft: 20,
  },
});

export default Todo;
