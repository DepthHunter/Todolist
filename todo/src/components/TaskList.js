
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import TaskContext from './TaskContext';
import '../App.css';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="items-container"> 
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
