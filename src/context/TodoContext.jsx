import { useState, createContext } from "react";
import { FaDollarSign, FaHome, FaUser, FaUserTie } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Hello World",
      tag: "Home",
      meta: {
        isDone: true,
        isImportant: false,
      },
    },
    {
      id: 2,
      title: "Hello Space",
      tag: "Work",
      meta: {
        isDone: true,
        isImportant: true,
      },
    },
  ]);
  const tags = {
    Home: <FaHome />,
    Personal: <FaUser />,
    Work: <FaUserTie />,
    Finance: <FaDollarSign />,
  };

  const importantTodo = todo.filter((item) => item.meta.isImportant);

  const addTodo = (newTodo) => {
    const id = uuidv4();
    newTodo.id = id;
    setTodo((todo) => [newTodo, ...todo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todo.filter((todoItem) => todoItem.id !== id);
    setTodo(newTodo);
  };

  return (
    <TodoContext.Provider
      value={{
        tags,
        todo,
        importantTodo,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
