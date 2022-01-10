import React, { useState } from 'react';
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

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    }]

    setTasks(newTasks);
  }

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App;