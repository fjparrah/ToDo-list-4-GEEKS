import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="container  ">
        <div className=" row mt-5 ">
          <div className="container">
            <h1>To-doList </h1>
          </div>
          <div className="container mt-3">
            <ul className="">
              <li>
                <input
                  placeholder="¿Qué necesitas hacer?"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      setInputValue("");
                      setTodos(todos.concat(inputValue));
                    }
                  }}
                  type="text"
                />
              </li>

              {todos.map((item, index) => (
                <li>
                  {item}{" "}
                  <i
                    class="fas fa-trash-alt"
                    onClick={() =>
                      setTodos(
                        todos.filter((t, currentIndex) => index != currentIndex)
                      )
                    }
                  ></i>
                </li>
              ))}
            </ul>
          </div>
          <div className="container pt-3">
            <h3> {todos.length} tasks </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
