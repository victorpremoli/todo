import { Hearder } from './components/Header'

import './global.css'
import styles from './App.module.css';
import { NewTaskInput } from './components/NewTaskInput';
import { Tasks } from './components/Tasks';
import { ChangeEvent, FormEvent, useState } from 'react';

interface TaskProps {
  text: string;
  isChecked?: boolean;
}


function App() {
  
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState<TaskProps>({
    text: ''
  });

  const tasksCheckeds = tasks.filter((task => {
    return task.isChecked === true;
  }))

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask])
    setNewTask({ text: ''})
  }
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask({
      text: event.target.value
    });
  }

  function deleteTask(taskToDelete: String) {
    const taskWithOutDeleteOne = tasks.filter(task => {
      return task.text !== taskToDelete;
    })

    setTasks(taskWithOutDeleteOne);
  }

  function checkTask(taskToCheck: String) {
    const tasksWithTaskChecked = tasks.map(task => {
      if(task.text === taskToCheck) {
        console.log("teste")
        return {
          ...task,
          isChecked: !task.isChecked
        }
      } else {
        return task;
      }
    })

    setTasks(tasksWithTaskChecked)
  }

  return (
    <>
      <Hearder />
      <form onSubmit={handleCreateNewTodo} className={styles.wrapper}>
        <NewTaskInput value={newTask.text} onChange={handleNewTaskChange}/>
        <div className={styles.divider}>
          <strong>
            Tarefas criadas
            <span>{tasks.length}</span>
          </strong>

          <strong className={styles.completedTasks}>
            Concluídas

            {tasks.length > 0 ?
              <span>
                {tasksCheckeds.length} de {tasks.length}
              </span>
              : 
              <span>
                0
              </span>
            }

          </strong>
        </div>
        {tasks.map((task) => {
          return(
            <Tasks 
              key={task.text} 
              text={task.text} 
              isChecked={task.isChecked} 
              onDeleteTask={deleteTask}
              onCheckTask={checkTask}
              />
          )
        })}
      </form>
    </>
  )
}

export default App;
