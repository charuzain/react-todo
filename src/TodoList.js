import React from 'react'
import TodoListItem from './TodoListItem';


const todoList = [
  { id: 1, title: "Learn Dart" },
  { id: 2, title: "Install flutter sdk and Android studio" },
  { id: 3, title: "Set up an android and iOS emulator" },
  { id: 4, title: "Learn about various widgets in flutter" },
];
function TodoList() {
  return (
    <ul style={{ listStyleType: "none" }} className="list-group px-5 d-flex justify-content-start text-center" >
      {todoList.map((todo) => (<TodoListItem key={todo.id} todo={todo} />
         
        ))}
      </ul>
  )
}

export default TodoList