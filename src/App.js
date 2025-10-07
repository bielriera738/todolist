// ... (imports anteriors)
import TaskList from './components/TaskList'; // Importem el nou component
 
function App() {
  const [tasks, setTasks] = useState([
    /* ... la llista inicial ... */
  ]);
  const [newTask, setNewTask] = useState('');
 
  // Les funcions de manipulació (handleToggleComplete, handleDeleteTask)
  // romanen a App.js ja que modifiquen l'estat 'tasks'.
 
  // ... (handleAddTask)
 
  // ... (handleToggleComplete)
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
 
  // ... (handleDeleteTask)
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
 
 
  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>
        {/* ... (El formulari queda de moment aquí) ... */}
 
        {/* Ús del nou component TaskList, passant les props */}
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
 
export default App;
 
