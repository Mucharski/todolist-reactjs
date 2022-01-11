import React, { useState } from 'react';
import { v4 } from 'uuid';
import "./App.css";
import AddTask from './components/AddTask/AddTask';
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar',
      completed: true,
    },
    {
      id: '2',
      title: 'Meditar',
      completed: false,
    },
    {
      id: '3',
      title: 'Ler',
      completed: false,
    }
  ]);

  const handleTaskCompletion = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);

  }

  const handleTaskExclusion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId);

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: v4(),
      completed: false
    }]

    setTasks(newTasks);
  }

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskCompletion={handleTaskCompletion} handleTaskExclusion={handleTaskExclusion} />
      </div>
    </>
  )
}

export default App;