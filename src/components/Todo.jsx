// import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";

// function Todo() {
//   const [todos, setTodos] = useState([]);

//   //función para añadir elementos una vez que el usuario pulsa el botón añadir
//   const addTodo = (todo) => {
//     const newTodos = [todo, ...todos];
//     setTodos(newTodos);
//     console.log(...todos);
//   };

//   //función para actualizar los elementos una vez que el usuario haga clic en el botón de actualización
//   const updateTodo = (todoId, newValue) => {
//     setTodos((prev) =>
//       prev.map((item) => (item.id === todoId ? newValue : item))
//     );
//   };

//   //función para eliminar elementos una vez que el usuario hace clic en eliminar iconos
//   const removeTodo = (id) => {
//     const removedArr = [...todos].filter((todo) => todo.id !== id);

//     setTodos(removedArr);
//   };

//   //función para mostrar los elementos como completados una vez que el usuario hace clic en la tarea completada
//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };
  

//   return (
//     <div>
//       <h1 className="header">Crea tu lista de deberes</h1>

//       {/*una vez mostrada la cabecera en la página web 
//       pasaremos la función como props a TodoForm y TodoList para mostrar los datos al usuario*/}

//       <TodoForm onSubmit={addTodo} />
//       <TodoList
//         todos={todos}
//         updateTodo={updateTodo}
//         removeTodo={removeTodo}
//         completeTodo={completeTodo}
//       />
//     </div>
//   );
// }

// export default Todo;

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const sortedTodos = todos.slice().sort((a, b) => a.text.localeCompare(b.text));

  return (
    <div>
      <h1 className="header">Agrega tus tareas</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={sortedTodos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default Todo;

const hoy = () =>{
  
  console.log(hoy.toDateString); // "Sun Jun 14 2020"
}

