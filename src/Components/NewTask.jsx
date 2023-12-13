import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredValue, setEnteredValue] = useState('');

  function handleChange(event) {
    setEnteredValue(event.target.value);
  }
  function handleClick() {
    onAddTask(enteredValue);
    setEnteredValue("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-md bg-stone-100 border-stone-300 border-2"
        onChange={handleChange}
        value={enteredValue}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Save Task
      </button>
    </div>
  );
}
