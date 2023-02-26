import { FaCircle, FaEdit, FaHome, FaTimes } from "react-icons/fa";
import { Button, Card, Tag } from "../shared";
import "./TodoItem.css";

export default function TodoItem({ taskName, taskTag }) {
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
      }}
    >
      <Button userStyles={todoItemBtnStyles}>
        <FaCircle />
      </Button>
      <div className="task-info">
        <span className="task-name">{taskName}</span>
        <Tag tagName="Home" tagIcon={<FaHome />} />
      </div>
      <div className="cta">
        <Button>
          <FaEdit />
        </Button>
        <Button>
          <FaTimes />
        </Button>
      </div>
    </Card>
  );
}
