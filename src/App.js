import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // ➕ Añadir tarea normal
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      important: false, // 👈 Por defecto no es importante
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  // 🔴 Añadir tarea importante
  const handleAddImportantTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      important: true, // 👈 Aquí sí marcamos como importante
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  // ✅ Completar tarea
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 🗑️ Eliminar tarea
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>

        <form className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <button onClick={handleAddTask}>Afegir</button>
          <button className="task-importante" onClick={handleAddImportantTask}>
            Tasca Important
          </button>
        </form>

        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${task.completed ? 'completed' : ''} ${
                task.important ? 'important' : ''
              }`}
            >
              <span onClick={() => handleToggleComplete(task.id)}>
                {task.text}
              </span>
              <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
