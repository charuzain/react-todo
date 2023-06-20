import React from "react";

function AddTodoForm() {
  const handleAddTodo = (e) => {
    e.preventDefault()  
    console.log(e.target.title.value);
    const todoTitle = e.target.title.value;
    e.target.reset()
    

   };
  return (
    <>
      <h1 className="text-center">Add New ToDo Item</h1>
      <div className="m-4 d-flex justify-content-center">
        <form onSubmit={handleAddTodo}>
          <div className="row mb-3">
            <label htmlFor="todoTitle" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                name = "title"
                className="form-control"
                id="todoTitle"
                placeholder="new todo item"
                required

              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodoForm;
