import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";
import type { Filter, Priority, Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, priority: Priority) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      priority,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const visibleTodos = todos.filter((todo) => {
    if (filter === "todo") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  const remainingCount = todos.filter((todo) => !todo.done).length;

  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <header className="flex items-baseline justify-between gap-4">
          <h1 className="text-3xl font-bold text-primary [text-shadow:0_0_12px_var(--color-primary)]">
            Todo List
          </h1>
          <p className="text-sm opacity-70">
            {remainingCount} {remainingCount === 1 ? "todo" : "todos"} left
          </p>
        </header>
        <AddTodoForm onAdd={addTodo} />
        <FilterBar filter={filter} onChange={setFilter} />
        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
