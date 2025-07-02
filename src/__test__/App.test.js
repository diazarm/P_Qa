import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

test("agrega una tarea", () => {
  render(<App />); 

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Estudiar Jest" } });
  fireEvent.click(button);

  expect(screen.getByText("Estudiar Jest")).toBeInTheDocument();
});
test("marca una tarea como completada", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Estudiar React" } });
  fireEvent.click(button);

  const task = screen.getByText("Estudiar React");
  fireEvent.click(task);

  expect(task).toHaveStyle("text-decoration: line-through");
});
test("elimina una tarea", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Estudiar Testing" } });
  fireEvent.click(button);

  const deleteButton = screen.getByTestId("delete-0");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Estudiar Testing")).not.toBeInTheDocument();
});

test("no permite agregar una tarea vacía", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(button);

  const lista = screen.queryAllByRole("listitem"); 
  expect(lista.length).toBe(0);
});

test("agrega una tarea válida", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Hacer ejercicio" } });
  fireEvent.click(button);

  expect(screen.getByText("Hacer ejercicio")).toBeInTheDocument();
});

test("marca una tarea como completada y la desmarca", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Leer un libro" } });
  fireEvent.click(button);

  const task = screen.getByText("Leer un libro");
  fireEvent.click(task);
  expect(task).toHaveStyle("text-decoration: line-through");

  fireEvent.click(task);
  expect(task).not.toHaveStyle("text-decoration: line-through");
});

test("elimina una tarea y verifica que no esté en la lista", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Comprar víveres" } });
  fireEvent.click(button);

  const deleteButton = screen.getByTestId("delete-0");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Comprar víveres")).not.toBeInTheDocument();
});

test("no permite agregar una tarea vacía y no muestra error", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(button);

  const lista = screen.queryAllByRole("listitem");
  expect(lista.length).toBe(0);
});

test("agrega una tarea válida y la muestra en la lista", () => {
  render(<App />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Lavar el auto" } });
  fireEvent.click(button);

  expect(screen.getByText("Lavar el auto")).toBeInTheDocument();
});