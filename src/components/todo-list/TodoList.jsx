import { useContext } from "react";
import TodoItem from "../todo-item/TodoItem";
import TodoContext from "../../context/TodoContext";
import { TodoListContainer } from "./TodoListStyles";

function TodoList({ displayOption = null }) {
  const { todo, importantTodo } = useContext(TodoContext);
  const list = displayOption ? importantTodo : todo;
  return (
    <TodoListContainer>
      {list.map((todoItem) => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
