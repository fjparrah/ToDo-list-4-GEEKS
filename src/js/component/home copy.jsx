import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container-fluid p-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-xs-12">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h1 className="text-center">To-do List</h1>
              </div>
              <div className="card-body">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    placeholder="¿Qué necesitas hacer?"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        addTodo();
                      }
                    }}
                    type="text"
                  />
                  <button
                    className="btn btn-primary"
                    onClick={addTodo}
                  >
                    Agregar
                  </button>
                </div>

                <ul className="list-group">
                  {todos.length === 0 ? (
                    <li className="list-group-item">
                      No hay tareas, añadir tareas
                    </li>
                  ) : (
                    todos.map((item, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <span>{item}</span>{" "}
                        <i
                          className="fas fa-trash-alt text-danger"
                          onClick={() => deleteTodo(index)}
                        ></i>
                      </li>
                    ))
                  )}
                </ul>
              </div>
              <div className="card-footer bg-primary text-white text-center">
                <h3>
                  {todos.length === 0
                    ? ""
                    : todos.length === 1
                    ? `${todos.length} tarea`
                    : `${todos.length} tareas`}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
