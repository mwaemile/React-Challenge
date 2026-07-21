import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
};

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}: TodoListProps) {
  return (
    <div className="mt-6">
      {todos.length > 0 ? (
        todos.map((todo) => (
         <TodoItem
  key={todo.id}
  todo={todo}
  toggleTodo={toggleTodo}
  deleteTodo={deleteTodo}
  editTodo={editTodo}
/>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No todos yet. Add your first task!
        </p>
      )}
    </div>
  );
}