import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function () {
  render(<NewTodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function () {
  const createTodoMock = jest.fn();
  render(<NewTodoForm addTodo={createTodoMock} />);
  const todoInput = screen.getByPlaceholderText("Enter todo");
  const addTodoButton = screen.getByText("Add todo");

  // Enter values in the input elements
  fireEvent.change(todoInput, { target: { value: "Test todo" } });
  fireEvent.click(addTodoButton);

  expect(createTodoMock).toHaveBeenCalled();
});
