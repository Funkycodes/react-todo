import React, { createContext, useReducer, useState } from "react";
import TodoReducer from "../reducer/TodoReducer";
import { FaDollarSign, FaHome, FaUser, FaUserTie } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initalState = {
    todo: [],
  };
  const [state, dispatch] = useReducer(TodoReducer, initalState);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const importantTodo = state.todo.filter((item) => item.meta.important);

  const tags = {
    Home: <FaHome />,
    Personal: <FaUser />,
    Work: <FaUserTie />,
    Finance: <FaDollarSign />,
  };

  const addTodo = (newTodo) => {
    const id = uuidv4();
    newTodo.id = id;
    dispatch({
      type: "ADD_TODO",
      newTodo,
    });
  };
  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        tags,
        todo: state.todo,
        importantTodo,
        addTodo,
        deleteTodo,
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
