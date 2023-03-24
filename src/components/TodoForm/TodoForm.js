import { useState } from "react"

export const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("")

  const handleAdd = () => {
    onAdd(title)
    setTitle("")
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <label>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </label>
  )
}
