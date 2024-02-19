
import React, { useContext } from 'react';
import TaskContext from './TaskContext';
import '../App.css';

const TaskItem = ({ task }) => {
  const { deleteTask, markTaskCompleted } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    markTaskCompleted(task.id, !task.completed); // Передача обратного значения завершенного состояния
  };

  return (
    <li className="task-item">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
      <button style={{ marginLeft: '0.5rem' }} onClick={handleComplete}>
        {task.completed ? 'Убрать' : 'Complete'}
      </button>
      <button style={{ marginLeft: '0.5rem' }} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
