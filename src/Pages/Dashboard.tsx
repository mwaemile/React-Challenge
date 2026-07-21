import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import DashboardLayout from "../components/DashboardLayout";


type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type User = {
  name: string;
  username: string;
  password: string;
};

type DashboardProps = {
  onLogout: () => void;
};

export default function Dashboard({
  onLogout,
}: DashboardProps) {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const todoKey = currentUser
  ? `todos_${currentUser.username}`
  : "";

  // Load logged-in user
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Load todos
  useEffect(() => {
  if (!todoKey) return;

  const savedTodos = localStorage.getItem(todoKey);

  if (savedTodos) {
    setTodos(JSON.parse(savedTodos));
  } else {
    setTodos([]);
  }
}, [todoKey]);

  // Save todos whenever they change
  useEffect(() => {
  if (!todoKey) return;

  localStorage.setItem(todoKey, JSON.stringify(todos));
}, [todos, todoKey]);

  const addTodo = () => {
    if (todoText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (todo: Todo) => {
  setTodoText(todo.text);
  setEditingTodo(todo);
};
const updateTodo = () => {
  if (!editingTodo) return;

  const updatedTodos = todos.map((todo) =>
    todo.id === editingTodo.id
      ? {
          ...todo,
          text: todoText,
        }
      : todo
  );

  setTodos(updatedTodos);

  setTodoText("");

  setEditingTodo(null);
};

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    onLogout();
  };

  return (
  <DashboardLayout
    userName={currentUser?.name || ""}
    onLogout={handleLogout}
  >
    <div className="space-y-6">
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Enter a new task..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />

        <Button
  onClick={
    editingTodo ? updateTodo : addTodo
  }
>
  {editingTodo ? "Update" : "Add"}
</Button>
      </div>

      <TodoList
  todos={todos}
  toggleTodo={toggleTodo}
  deleteTodo={deleteTodo}
  editTodo={editTodo}
/>
    </div>
  </DashboardLayout>
);
}