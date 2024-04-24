import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ id, todo }) => {
    setTodos(() => [...todos, { id, todo }]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const update = (id, newData) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, todo: newData } : item))
    );
  };

  const todoItem = todos.map((todo) => (
    <Todo
      item={todo.todo}
      remove={remove}
      id={todo.id}
      key={todo.id}
      update={update}
    />
  ));

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      <ol className="TodoList-items">{todoItem}</ol>
    </div>
  );
};

export default TodoList;
