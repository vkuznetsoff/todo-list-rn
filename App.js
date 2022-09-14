// import { View, Button, Text, Animated, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useState } from 'react';

import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/Todolist";

const App = () => {
  return (
    <View>
      {/* <Text style={styles.header}>Todo List</Text> */}
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: "500",
  },
});

export default App;

// function Home({ navigation }) {
//   const [value, setValue] = useState('')
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//       <TextInput value={value}
//       onChangeText={setValue}

//       />
//     </View>
//   );
// }

// function Profile({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile screen</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const forFade = ({ current, next }) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: { opacity },
//     rightButtonStyle: { opacity },
//     titleStyle: { opacity },
//     backgroundStyle: { opacity },
//   };
// };

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerTintColor: 'white',
//           headerStyle: { backgroundColor: 'tomato' },
//         }}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{ headerStyleInterpolator: forFade }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }
