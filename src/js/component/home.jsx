import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  {
    /* comentario de push remote prueba */
  }

  return (
    <body>
      <div className="body">
        <h1>My tareas</h1>
        <div className="caja">
          <ul>
            <li>
              <input
                type="text"
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
                onKeyPress={(event) => {
                  if (event.key === "Enter" && event.target.value !== "") {
                    setTodos(todos.concat(inputValue));
                    setInputValue("");
                  }
                  {
                    /* linea de arriba evita que se envie un campo en blanco, hace reset al placeholder con "" y envia la tarea */
                  }
                }}
                placeholder="What you need to do?"
              ></input>
            </li>

            {todos.map((item, index) => (
              <li>
                {item}
                {""}
                {/* evento para eliminar las tareas */}
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
          <div className="task">{todos.length} task</div>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/90d12af69a.js"
        crossorigin="anonymous"
      ></script>
    </body>
  );
};

export default Home;
