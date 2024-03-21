import React, { useState } from "react";

const DeleteBtn = ({ deleteTheTask }) => {
  return (
    <button type="button" className="delete-btn" onClick={deleteTheTask}>
      <span className="material-symbols-outlined">delete</span>
    </button>
  );
};

const Todo = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = () => {
    props.deleteTask(props.id);
  };

  return (
    <li className={`list-item ${isChecked ? "done" : ""}`}>
      <div className="item-box">
        <input
          type="checkbox"
          className="list-check"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <input type="text" value={props.item} id={props.id} />
      </div>
      <DeleteBtn deleteTheTask={handleDelete} />
    </li>
  );
};

export default Todo;
