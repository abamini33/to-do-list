import { useState } from "react";
import type { Priority } from "../types";

type AddTodoFormProps = {
  onAdd: (text: string, priority: Priority) => void;
};

function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [inputText, setInputText] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("medium");

  const handleAdd = () => {
    if (inputText.trim() === "") {
      alert("Please enter a todo.");
      return;
    }
    onAdd(inputText.trim(), priority);
    setInputText("");
  };

  return (
    <form
      className="flex gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
    >
      <input
        type="text"
        className="input w-full rounded-lg"
        placeholder="Add a new todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <select
        className="select w-full rounded-lg"
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className="btn btn-primary rounded-lg">Add</button>
    </form>
  );
}

export default AddTodoForm;
