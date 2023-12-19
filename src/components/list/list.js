import React from 'react';

const List = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
};

export default List;
