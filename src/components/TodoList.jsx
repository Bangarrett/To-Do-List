// import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import { MdOutlineEdit, MdDelete } from "react-icons/md";

// function TodoList({ todos, updateTodo, removeTodo, completeTodo }) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: "",
//   });

//   const submitUpdate = (value) => {
//     updateTodo(edit.id, value);
//     setEdit({
//       id: null,
//       value: "",
//     });
//   };

//   if (edit.id) {
//     return <TodoForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return todos.map((todo, index) => (
//     <>
      



//       <div
//         className={todo.isComplete ? "todo-complete" : "todo-container"}
//         key={index}
//       >
//         <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//           {todo.text}
//         </div>

//         <div className="icons">
//           <MdDelete
//             onClick={() => removeTodo(todo.id)}
//             className="delete-icon"
//           />
//           <MdOutlineEdit
//             onClick={() => setEdit({ id: todo.id, value: todo.text })}
//             className="edit-icon"
//           />
//         </div>
//       </div>
//     </>
//   ));
// }

// export default TodoList;

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdOutlineEdit, MdDelete } from "react-icons/md";

function TodoList({ todos, updateTodo, removeTodo, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <>
    
      <div
        className={todo.isComplete ? "todo-complete" : "todo-container"}
        key={index}
      >
        <div>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => completeTodo(todo.id)}
          />
          <span
            onClick={() => completeTodo(todo.id)}
            style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
          >

            
            {todo.text}
          </span>
        </div>

        <div className="icons">
          <MdDelete
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <MdOutlineEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    </>
  ));
}

export default TodoList;