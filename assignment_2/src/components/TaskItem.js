import React from 'react';
import './TaskItem.css';

function TaskItem({
  task,
  onToggleComplete,
  onEdit,
  onDelete,
}) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          aria-label={`Mark task "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
      </div>

      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <p className="task-date">
          Created: {new Date(task.createdAt).toLocaleDateString()} at{' '}
          {new Date(task.createdAt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>

      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
          className="btn-edit"
          title="Edit task"
          aria-label={`Edit task "${task.title}"`}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="btn-delete"
          title="Delete task"
          aria-label={`Delete task "${task.title}"`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
