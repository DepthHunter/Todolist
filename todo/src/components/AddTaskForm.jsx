
import React, { useState, useContext } from 'react';
import TaskContext from './TaskContext'; 
import '../App.css'

const AddTaskForm = () => {
  const { addTask } = useContext(TaskContext); 

  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask({ id: Date.now(), text: taskText, completed: false });
    setTaskText('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
