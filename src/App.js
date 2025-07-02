import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        data-testid="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask} data-testid="add-button">Agregar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: task.done ? 'line-through' : 'none' }}
              onClick={() => toggleTask(index)}
              data-testid={`task-${index}`}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} data-testid={`delete-${index}`}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
