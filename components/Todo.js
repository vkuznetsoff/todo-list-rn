import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const Todo = ({ todo }) => {
  return (
    <SafeAreaView>
      <Text>{todo.text}</Text>
    </SafeAreaView>
  );
};

export default Todo;
