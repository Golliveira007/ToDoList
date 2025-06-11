import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar",
      category: "(Estudos)",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Trabalhar",
      category: "(Trabalho)",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Programar",
      category: "(Programação)",
      isCompleted: false,
    }
  ]);

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div className='todo'>
            <div className='content'>
              <p>{todo.text}</p>
              <p className="category">
                {todo.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
