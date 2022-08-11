import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919", 
    padding: 24,
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -50,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 6,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  tasksCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tasksCreated: {
    flexDirection: "row",
    alignItems: "center",
  },
  tasksCreatedText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4EA8DE",
    marginRight: 6,
  },
  tasksDone: {
    flexDirection: "row",
    alignItems: "center",
  },
  tasksDoneText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#8284FA",
    marginRight: 6,
  },
  tasksTotal: {
    width: 30,
    height: 20,
    borderRadius: 100,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  tasksTotalText: {
    fontWeight: "bold",
    color: "#FFF",
  },
  emptyListContainer: {
    paddingVertical: 50,
    borderTopWidth: 1,
    borderTopColor: "#3D3D3D",
    alignItems: "center",
    justifyItems: "center",
  },
  emptyListTextStrong: {
    marginTop: 20,
    fontWeight:"bold",
    fontSize: 16,
    color: "#808080",
  },
  emptyListText: {
    marginTop: 2,
    fontSize: 16,
    color: "#808080",
  },
});