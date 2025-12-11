## 📽️ Demo  
🔗 [Watch the Demo](https://youtu.be/73e61vtSMq4)


# 📝 To-Do List Application

A modern, fully-featured to-do list application built with React. Manage your tasks efficiently with a clean, responsive interface and persistent data storage.

## 🎯 Features

- ✅ **Add Tasks** - Create new tasks with title and optional description
- ✏️ **Edit Tasks** - Modify existing tasks at any time
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- ✔️ **Mark Complete/Undo** - Toggle task completion status with a single click
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 💾 **LocalStorage Persistence** - Tasks are automatically saved and persist across browser sessions
- 📊 **Statistics Dashboard** - View total, active, and completed task counts
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Hooks** - `useState` and `useEffect` for state management
- **CSS3** - Modern styling with gradients and animations
- **LocalStorage** - Client-side data persistence
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Project Structure

```
src/
├── App.js                 # Main component with state management
├── App.css                # App styling
├── components/
│   ├── TaskForm.js        # Form for adding/editing tasks
│   ├── TaskForm.css       # TaskForm styling
│   ├── TaskList.js        # Display list of tasks
│   ├── TaskList.css       # TaskList styling
│   ├── TaskItem.js        # Individual task item
│   ├── TaskItem.css       # TaskItem styling
│   ├── FilterButtons.js   # Filter control buttons
│   └── FilterButtons.css  # FilterButtons styling
├── index.js               # React entry point
└── index.css              # Global styling
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd assignment_2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

### Adding a Task
1. Enter a task title in the "Task Title" field
2. (Optional) Add a description in the "Description" field
3. Click "Add Task" button
4. Task appears in the list on the right

### Editing a Task
1. Click the "Edit" button on any task
2. Modify the title or description
3. Click "Update Task"

### Deleting a Task
1. Click the "Delete" button on any task
2. Task is removed immediately

### Marking Tasks Complete
1. Click the checkbox next to any task to mark it complete
2. Completed tasks appear with strikethrough styling
3. Click again to undo

### Filtering Tasks
- **All Tasks** - View all tasks
- **Active** - Show only incomplete tasks
- **Completed** - Show only completed tasks

### Sample Data
- Click "Load Sample Tasks" button to populate with example tasks for testing

## 💾 Data Persistence

All tasks are automatically saved to the browser's localStorage. Your data persists even after:
- Refreshing the page
- Closing the browser
- Reopening the application

## 📱 Responsive Breakpoints

- **Desktop** (1024px+) - Two-column layout (Form left, Tasks right)
- **Tablet** (768px-1023px) - Stacked layout with adjusted spacing
- **Mobile** (< 768px) - Single column, optimized touch interface


## 📝 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## 🎓 Learning Outcomes

This project demonstrates:
- React component architecture
- State management with `useState`
- Side effects with `useEffect`
- LocalStorage API usage
- CSS Flexbox and Grid layouts
- Responsive design principles
- Component composition
- Prop drilling and event handling

## 🔮 Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement priority levels
- [ ] Add due dates and reminders
- [ ] Dark mode toggle
- [ ] Export/Import tasks
- [ ] User authentication
- [ ] Cloud synchronization
- [ ] Search functionality















