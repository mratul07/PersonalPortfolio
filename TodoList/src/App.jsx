import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo }}>
      <TodoForm />

      {/* Display the list of todos */}
      <ul className="list">
        {todos.map((todo, index) => (
          <li className="list-item" key={index}>{todo}</li>
        ))}
      </ul>
    </TodoProvider>
  );
}

export default App;
