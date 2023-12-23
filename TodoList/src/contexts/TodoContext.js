import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: ["todo msg",],
    addTodo: (todo) => {}
});


export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider;

