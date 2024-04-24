import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

const addNewTodo = (todo = "Test this todo app") => {
  // Select input elements and the submit button
  const todoInput = screen.getByPlaceholderText("Enter todo");
  const addTodoButton = screen.getByText("Add todo");

  // Enter values in the input elements
  fireEvent.change(todoInput, { target: { value: todo } });

  // fire an event to submit
  fireEvent.click(addTodoButton);
};

it("Adds a new todo on submit", () => {
  render(<TodoList />);
  // Check to make sure there are no boxes on the page.
  expect(screen.queryByText("remove")).not.toBeInTheDocument();
  expect(screen.queryByText("edit")).not.toBeInTheDocument();

  // Add a new box and expect to see this text now.
  addNewTodo();
  expect(screen.getByText("remove")).toBeInTheDocument();
  expect(screen.getByText("edit")).toBeInTheDocument();
});

it("can edit a todo", () => {
  render(<TodoList />);
  addNewTodo();

  fireEvent.click(screen.getByText("edit"));
  expect(screen.getByText("Update!")).toBeInTheDocument();

  const editInput = screen.getByDisplayValue("Test this todo app");
  fireEvent.change(editInput, { target: { value: "Working well" } });
  fireEvent.click(screen.getByText("Update!"));

  // expect only edited todo to appear
  expect(screen.getByText("Working well")).toBeInTheDocument();
  expect(screen.queryByText("Test this todo app")).not.toBeInTheDocument();
});

it("can remove a todo", () => {
  render(<TodoList />);
  addNewTodo();
  const removeButton = screen.getByText("remove");
  fireEvent.click(removeButton);
  expect(screen.queryByText("remove")).not.toBeInTheDocument();
  expect(screen.queryByText("edit")).not.toBeInTheDocument();
});
