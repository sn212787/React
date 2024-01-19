import { createContext, useContext } from "react";

export const Todo = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(Todo);
};

// this is for used for we do not need to wrap in provider in other files
export const TodoProvider = Todo.Provider;
