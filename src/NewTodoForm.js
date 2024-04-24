import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    todo: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.todo !== "") {
      addTodo({ ...formData, id: uuid() });
      setFormData(INITIAL_STATE);
    }
  };

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <label>Todo</label>
        <input
          className="NewTodoForm-input"
          type="text"
          placeholder="Enter todo"
          name="todo"
          id="todo"
          value={formData.todo}
          onChange={handleChange}
        />
        <button className="NewTodoForm-button" type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
