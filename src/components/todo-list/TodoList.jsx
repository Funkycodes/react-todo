import { useContext } from "react";
import TodoItem from "../todo-item/TodoItem";
import TodoContext from "../../context/TodoContext";
import "./TodoList.css";

function TodoList({ sortOption, displayOption = null }) {
  const { todo, importantTodo } = useContext(TodoContext);
  const list = displayOption ? importantTodo : todo;
  return (
    <div className="todo-list">
      {list.map((todoItem) => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
