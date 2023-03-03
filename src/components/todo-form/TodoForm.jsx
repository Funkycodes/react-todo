import React, { useState, useContext } from "react";
import { FaCircleNotch, FaPlus, FaStar } from "react-icons/fa";
import TodoContext from "../../context/TodoContext";
import TagSelect from "../tag-select/TagSelect";
import "./TodoForm.css";

function TodoForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [selectedTag, setSelectedTag] = useState("Home");
  const [isImportant, setIsImportant] = useState(false);
  const { addTodo } = useContext(TodoContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSelect = (option) => {
    setSelectedTag(option);
  };
  const handleSubmit = (e) => {
    if (e.type === "submit") {
      e.preventDefault();
    }
    if (!text) return;
    const newTodo = {
      title: text,
      tag: selectedTag,
      meta: {
        isImportant,
        isDone: false,
      },
    };
    addTodo(newTodo);
    setText("");
    setIsImportant(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FaCircleNotch
        className="add-icon"
        style={{
          display: `${isFocused ? "inline-block" : "none"}`,
        }}
        onClick={(e) => {
          handleSubmit(e);
        }}
      />
      <FaPlus
        style={{
          display: `${isFocused ? "none" : "block"}`,
        }}
        className="plus-icon"
      />
      <span className="input-container">
        <input
          type="text"
          placeholder="Add Task"
          className="task-input"
          value={text}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (text || isImportant) {
              return;
            } else {
              setIsFocused(false);
            }
          }}
        />
      </span>
      <TagSelect selectedTag={selectedTag} handleSelect={handleSelect} />
      <FaStar
        color={`${isImportant ? "gold" : "inherit"}`}
        onClick={() => setIsImportant(!isImportant)}
      />
    </form>
  );
}

export default TodoForm;
