import React, { useContext, useState } from "react";
import "./todoForm.css";
import { useTodo } from "../contexts/TodoContext";

function todoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo(todo);
    setTodo("");
    console.log(todo);
    console.log(todo);
  };

  return (
    <div className="main-container">
      <h1 className="title">To-Do List</h1>

      <div className="elementWrapper">
        <input
          className="input-field"
          placeholder="Enter Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}

export default todoForm;
