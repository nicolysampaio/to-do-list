import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid"
import { PlusCircle, ClipboardText } from "phosphor-react-native";

import { styles } from "./styles";

import { Task } from "../../components/Task";

export type ITask = {
  id: string;
  text: string;
  isDone: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskText, setTaskText] = useState("");
  
  const totalTasks = tasks.length;
  const totalTasksDone = tasks.filter((task) => task.isDone).length

  function handleTaskAdd() {
    setTasks([
      ...tasks, {
        id: String(uuid.v4()),
        text: taskText,
        isDone: false,
      }
    ]);
    setTaskText("");
  }

  function handleTaskRemove(id: string) {
    setTasks(prevState => prevState.filter((task) => task.id !== id))
  }

  function handleTaskDone(id: string) {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task;
    }));
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskText}
            value={taskText}
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleTaskAdd}
          >
            <PlusCircle size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksCounter}>
          <View style={styles.tasksCreated}>
            <Text style={styles.tasksCreatedText}>Criadas</Text>
            <View style={styles.tasksTotal}>
              <Text style={styles.tasksTotalText}>{totalTasks}</Text>
            </View>
          </View>
          <View style={styles.tasksDone}>
            <Text style={styles.tasksDoneText}>Concluídas</Text>
            <View style={styles.tasksTotal}>
              <Text style={styles.tasksTotalText}>{totalTasksDone}</Text>
            </View>
          </View>
        </View>
        
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Task
              key={item.id}
              task={item}
              onDone={() => handleTaskDone(item.id)}
              onRemove={() => handleTaskRemove(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <ClipboardText size={56} color="#3D3D3D" />
              <Text style={styles.emptyListTextStrong}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
