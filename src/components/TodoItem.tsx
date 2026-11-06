import type { Priority, Todo } from "../types";

const priorityClasses: Record<Priority, string> = {
  low: "badge badge-info shadow-[0_0_12px_var(--color-info)]",
  medium: "badge badge-warning shadow-[0_0_12px_var(--color-warning)]",
  high: "badge badge-error shadow-[0_0_20px_var(--color-error)]",
};

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center gap-4 bg-neutral text-neutral-content p-3 rounded-lg">
      <input
        type="checkbox"
        className="checkbox checkbox-primary rounded-lg"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span
        className={`flex-1 min-w-0 break-words ${todo.done ? "line-through opacity-50" : ""}`}
      >
        {todo.text}
      </span>
      <div className="flex items-center gap-2">
        <span
          className={`${priorityClasses[todo.priority]} w-20 justify-center border-2 border-black rounded-lg text-center`}
        >
          {todo.priority}
        </span>
        <button
          className="btn btn-secondary rounded-lg"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
