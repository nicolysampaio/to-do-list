import { Text, TouchableOpacity, View } from "react-native";
import { Check, Trash } from "phosphor-react-native";

import { ITask } from '../../screens/Home';

import { styles } from './styles';

type Props = {
  task: ITask;
  onDone: () => void;
  onRemove: () => void;
}

export function Task({ task, onDone, onRemove}: Props) {

  return(
    <View style={ task.isDone ? styles.containerDone : styles.container }>
      <TouchableOpacity style={ task.isDone ? styles.checkboxDone : styles.checkbox } onPress={onDone}>
        {task.isDone ?
          <Check size={12} color="#f2f2f2" /> :
          <View/>
        }
      </TouchableOpacity>
      
      <Text style={ task.isDone ? styles.taskTextDone : styles.taskText }>
        {task.text}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}