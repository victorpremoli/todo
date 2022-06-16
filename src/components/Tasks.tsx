import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tasks.module.css';

interface TaskProps{ 
  id?: number;
  text: string;
  isChecked?: boolean;
  onDeleteTask: (task: string) => void;
  onCheckTask: (task: string) => void;
}

export function Tasks({text, isChecked = false, onDeleteTask, onCheckTask }: TaskProps) {
  const [taskChecked, setTaskChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(text);
  }

  function handleTaskChecked() {
    onCheckTask(text);
    
    isChecked = taskChecked;
    setTaskChecked(!isChecked);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" name="checkTaks" onClick={handleTaskChecked}/>
      <p className={taskChecked ? styles.taskChecked : '' } >{text}</p>
      <Trash size={24} onClick={handleDeleteTask} />
    </div>
  )
}
