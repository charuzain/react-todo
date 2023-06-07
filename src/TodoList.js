import React from 'react'

const todoList = [
  { id: 1, title: "Learn Dart" },
  { id: 2, title: "Install flutter sdk and Android studio" },
  { id: 3, title: "Set up an android and iOS emulator" },
  { id: 4, title: "Learn about various widgets in flutter" },
];
function TodoList() {
  return (
    <ul style={{ listStyleType: "none" }} className="list-group px-5 d-flex justify-content-start text-center" >
        {todoList.map((item) => (
          <li key={item.id} style={{ height: "70px" }}className="list-group-item bg-secondary text-light my-1 ">{item.title}</li>
        ))}
      </ul>
  )
}

export default TodoList