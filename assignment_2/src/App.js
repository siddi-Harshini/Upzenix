import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
    setFilter('all');
  };

  // Update existing task
  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    if (editingTask && editingTask.id === taskId) {
      setEditingTask(null);
    }
  };

  // Toggle task completion status
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle edit task
  const handleEditTask = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  // Load sample tasks for demo
  const handleLoadSampleTasks = () => {
    const sampleTasks = [
      {
        id: Date.now() + 1,
        title: 'Complete project proposal',
        description: 'Finish writing the project proposal document and send it to stakeholders for review',
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 2,
        title: 'Review team feedback',
        description: 'Go through all feedback from the team meeting and document action items',
        completed: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 3,
        title: 'Learn React hooks',
        description: 'Complete the React hooks tutorial and build a practice project using useState and useEffect',
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 4,
        title: 'Update project documentation',
        description: 'Update README and API documentation to reflect recent changes in the codebase',
        completed: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 5,
        title: 'Grocery shopping',
        description: 'Buy milk, eggs, bread, vegetables, and chicken from the supermarket',
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ];
    setTasks(sampleTasks);
    setFilter('all');
  };

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>📝 My To-Do List</h1>
          <p className="subtitle">Stay organized and productive</p>
        </div>
      </header>

      <main className="app-main">
        {/* Statistics */}
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">{totalTasks}</span>
            <span className="stat-label">Total Tasks</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{activeTasks}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{completedTasks}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <div className="app-container">
          {/* Left Column - Task Form */}
          <div className="left-column">
            <TaskForm
              onAddTask={handleAddTask}
              editingTask={editingTask}
              onUpdateTask={handleUpdateTask}
              onCancelEdit={handleCancelEdit}
            />
            {tasks.length === 0 && (
              <button className="btn-load-sample" onClick={handleLoadSampleTasks}>
                📌 Load Sample Tasks
              </button>
            )}
          </div>

          {/* Right Column - Filters and Task List */}
          <div className="right-column">
            <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
            <TaskList
              tasks={tasks}
              filter={filter}
              onToggleComplete={handleToggleComplete}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 To-Do List App | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
