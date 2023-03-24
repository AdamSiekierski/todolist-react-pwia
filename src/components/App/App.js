import { useState } from "react"
import { TodoForm } from "../TodoForm/TodoForm"
import { TodoItem } from "../TodoItem/TodoItem"
import "./App.css"

export const App = () => {
  const [todos, setTodos] = useState([])
  const [hiddenCompleted, setHiddenCompleted] = useState(false)

  const handleAdd = (title) => {
    setTodos(prev => [...prev, { id: todos.length + 1, title, completed: false }])
  }

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  const handleHiddenCompletedChange = (e) => {
    setHiddenCompleted(e.target.checked)
  }

  return (
    <div className="wrapper">
      <h1>Welcome to my To Do list!</h1>

      <div className="list">
        <label>
          <input type="checkbox" onChange={handleHiddenCompletedChange} />
          <span>hide completed</span>
        </label>
        <hr />
        <div>
          {todos.map((todo) =>
            !todo.completed || !hiddenCompleted ? (
              <TodoItem {...todo} key={todo.id} onToggle={handleToggle} />
            ) : null
          )}
          {!todos.length && <span>Nothing to do...</span>}
        </div>
        <hr />
        <TodoForm onAdd={handleAdd} />
      </div>
    </div>
  )
}
