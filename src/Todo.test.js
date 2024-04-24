import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function () {
  render(<Todo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("executes the delete function on button click", function () {
  const removeMock = jest.fn();
  render(<Todo remove={removeMock} />);
  const deleteButton = screen.getByText("remove");
  fireEvent.click(deleteButton);
  expect(removeMock).toHaveBeenCalled();
});
