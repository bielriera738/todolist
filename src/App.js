// ... (imports)
import TaskForm from './components/TaskForm'; // Importem el nou component
import TaskList from './components/TaskList'; // Importem el nou component
import React, { useState } from 'react';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Comprar pa', completed: false, dueDate: null }, // Afegim dueDate
    { id: 2, text: 'Acabar informe', completed: true, dueDate: new Date().toISOString() }, 
  ]);
  
  // ... (handleAddTask s'ha d'actualitzar per incloure dueDate: null)
  const handleAddTask = (text) => {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
      dueDate: null, // Nou camp
    };
    setTasks([...tasks, task]);
  };
  
  // NOVA FUNCIÓ per actualitzar només la data
  const handleUpdateTaskDate = (taskId, newDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, dueDate: newDate ? newDate.toISOString() : null } : task
      )
    );
  };
  
  // ... (return)
  return (
    <div className="app-container">
      <div className="todo-container">
        {/* ... */}
        
        {/* Caldrà passar handleUpdateTaskDate al TaskList i d'allà al TaskItem */}
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
          onUpdateTaskDate={handleUpdateTaskDate} // Nova prop
        />
      </div>
    </div>
  );
}
// ...
 
export default App;