import React, { useState } from 'react';
import "./App.css";
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
  return (
    <>
      <div className='container'>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App;