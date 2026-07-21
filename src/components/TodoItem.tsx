type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
};

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span
          className={
            todo.completed
              ? "line-through text-gray-500"
              : "text-black"
          }
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-2">
  <button
    onClick={() => editTodo(todo)}
    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
  >
    Edit
  </button>

  <button
    onClick={() => deleteTodo(todo.id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
  >
    Delete
  </button>
</div>
    </div>
  );
}