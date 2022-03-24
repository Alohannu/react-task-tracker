import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'Meeting at School',
      day: 'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at Work',
      day: 'Feb 5th at 4:30 pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Meeting at Home',
      day: 'Feb 5th at 7:30 pm',
      reminder: false,
    },
  ])

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
  }


  return (
    <div className="container">
      <Header title="Karl" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
}


export default App;
