import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({
  tasks,
  filter,
  onToggleComplete,
  onEdit,
  onDelete,
}) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // 'all'
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="no-tasks">
        <p className="no-tasks-icon">📋</p>
        <p className="no-tasks-message">
          {tasks.length === 0
            ? 'No tasks yet! Create one to get started.'
            : `No ${filter} tasks found.`}
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="task-stats">
        <span>
          {filteredTasks.filter((t) => t.completed).length} of{' '}
          {filteredTasks.length} completed
        </span>
      </div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
