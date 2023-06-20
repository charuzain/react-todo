import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = useState('');

  return (
    <>
      <h1 className="heading text-center">Todo List</h1>
      <TodoList />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p style={{ height: "70px" }}className="list-group-item bg-primary text-light my-1 mx-5 text-center">{newTodo}</p>
    </>
  );
}

export default App;
