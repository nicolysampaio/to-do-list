import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 56,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#4EA8DE",
    marginRight: 10,
  },
  taskText: {
    width: 250,
    color: "#FFFFFF",
  },
  containerDone: {
    flexDirection: "row",
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  checkboxDone: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    width: 250,
    color: "#808080",
    textDecorationLine: "line-through",
  },
})