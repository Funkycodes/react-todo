import { useContext } from "react";
import {
  TodoItemCard,
  CtaContainer,
  TaskInfo as ItemInfo,
  ItemTag,
} from "./TodoItemStyles";
import { FaEdit, FaTimes } from "react-icons/fa";
import { Button, Tag } from "../shared";
import TodoContext from "../../context/TodoContext";

export default function TodoItem({ title, tag, id }) {
  const { deleteTodo, tags } = useContext(TodoContext);
  return (
    <TodoItemCard dark={true}>
      <ItemInfo>
        <span data-attr="title">{title}</span>
        <ItemTag tagName={tag} tagIcon={tags[tag]} />
      </ItemInfo>
      <CtaContainer>
        <Button>
          <FaEdit />
        </Button>
        <Button handleClick={() => deleteTodo(id)}>
          <FaTimes />
        </Button>
      </CtaContainer>
    </TodoItemCard>
  );
}
