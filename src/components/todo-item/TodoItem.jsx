import { FaCircle, FaEdit, FaHome, FaTimes } from "react-icons/fa";
import { Button, Card, Tag } from "../shared";
import TodoContext from "../../context/TodoContext";
import "./TodoItem.css";
import { useContext } from "react";

export default function TodoItem({ title, tag, id }) {
  const { deleteTodo, tags } = useContext(TodoContext);
  const todoItemBtnStyles = {
    padding: 0,
    background: "none",
  };

  return (
    <Card
      userStyles={{
        padding: ".5rem",
        gap: ".75rem",
        alignItems: "start",
        justifyContent: "space-between",
        backgroundColor: "#333",
        flexWrap: "nowrap",
      }}
    >
      <Button userStyles={todoItemBtnStyles}>
        <FaCircle />
      </Button>
      <div className="task-info">
        <span className="task-name">{title}</span>
        <Tag tagName={tag} tagIcon={tags[tag]} />
      </div>
      <div className="cta">
        <Button>
          <FaEdit />
        </Button>
        <Button handleClick={() => deleteTodo(id)}>
          <FaTimes />
        </Button>
      </div>
    </Card>
  );
}
