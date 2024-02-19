import React from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './components/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Todo List</h1>
        <AddTaskForm  />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
