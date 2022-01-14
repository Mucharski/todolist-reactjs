import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./App.css";

import AddTask from './components/AddTask/AddTask';
import Tasks from "./components/Tasks"
import Header from './components/Header/Header';
import TaskDetails from './components/TaskDetails/TaskDetails';

const App = () => {


  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data);
    };

    fetchTasks();
  }, []);

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
    <Router>
      <div className='container'>
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskCompletion={handleTaskCompletion} handleTaskExclusion={handleTaskExclusion} />
          </>
        )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  )
}

export default App;