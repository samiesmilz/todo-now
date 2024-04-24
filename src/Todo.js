import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ item, remove, update, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState(item);
  const handleRemove = () => {
    remove(id);
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    if (newData.trim() !== "") {
      update(id, newData);
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setNewData(e.target.value);
  };

  const handleEditRequest = () => {
    setIsEditing(true);
  };

  let todoItem = (
    <div className="Todo">
      <li className="Todo-item">
        {item}
        <div className="Todo-controls">
          <button onClick={handleEditRequest}>edit</button>
          <button onClick={handleRemove}>remove</button>
        </div>
      </li>
    </div>
  );

  if (isEditing) {
    todoItem = (
      <div>
        <form onSubmit={handleUpdate}>
          <input
            className="Todo-input"
            type="text"
            value={newData}
            onChange={handleChange}
          />
          <button>Update!</button>
        </form>
      </div>
    );
  }

  return todoItem;
};

export default Todo;
