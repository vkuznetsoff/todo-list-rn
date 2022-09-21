import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bg_image: {
    width: "100%",
    minHeight: "100vh",
    flex: 1,
  },

  todolist: {
    flexDirection: "column",
    width: "100%",
  },

  header: {
    fontSize: "26pt",
    fontWeight: "700",
    width: "100%",
    height: 100,
    color: "#424949",
    padding: 15,
    marginTop: 20,
    padding: 25,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(40, 55, 71, 0.7)",
  },

  todolist_content: {
    flex: 1,
  },

  bottom: {
    marginTop: 20,
  },

  bottom_header: {
    width: "fit-content",
    padding: 8,
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 20,
    color: "#6E2C00",
  },
});
