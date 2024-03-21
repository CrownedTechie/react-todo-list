import React, { useState } from "react";

const AddBtn = ({ addTheTask }) => {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTask = () => {
    if (todoText.trim() !== "") {
      addTheTask(todoText);
      setTodoText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && todoText.trim() !== "") {
      addTheTask(todoText);
      setTodoText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id="text-input"
        value={todoText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add list ..."
      />

      <button type="button" className="add-btn" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default AddBtn;
