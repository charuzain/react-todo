
import React from 'react'

function TodoListItem(props) {
  console.log(props);
  return (
    <li style={{ height: "70px" }}className="list-group-item bg-secondary text-light my-1 ">{props.todo.title}</li>
  )
}

export default TodoListItem