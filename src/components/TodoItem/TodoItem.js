export const TodoItem = ({ title, completed, onToggle, id }) => {
  return (
    <label className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span>{title}</span>
    </label>
  )
}
