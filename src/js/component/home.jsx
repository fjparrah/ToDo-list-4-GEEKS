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
      <div className="container col-sm-12 col-lg-6  ">
        <div className="row mt-5">
          <div className="container">
            <h1>To-do List </h1>
          </div>
          <div className="container mt-3">
            <ul>
              <li>
                <input
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
              </li>

              {todos.length === 0 ? (
                <li>No hay tareas, añadir tareas</li>
              ) : (
                todos.map((item, index) => (
                  <li key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{item}</span>{" "}
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => deleteTodo(index)}
                      ></i>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="container pt-3">
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
    </>
  );
};

export default Home;
