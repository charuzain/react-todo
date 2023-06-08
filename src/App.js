import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <>
      <h1 className="heading text-center">Todo List</h1>
      <TodoList />
      <AddTodoForm/>
    </>
  );
}

export default App;
