import React, { useContext, useReducer } from "react";
import { FormContainer, InputContainer } from "./TodoFormStyles";
import Input from "../input/Input";
import TagSelect from "../tag-select/TagSelect";
import { FaCircleNotch, FaPlus, FaStar } from "react-icons/fa";

import TodoContext from "../../context/TodoContext";
import FormReducer from "../../reducer/FormReducer";

export default function TodoForm() {
  const initialState = {
    focused: false,
    text: "",
    tag: "Home",
    important: false,
  };
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const { addTodo } = useContext(TodoContext);
  const { focused, text, tag, important } = state;

  const handleChange = (e) => {
    dispatch({
      type: "text",
      text: e.target.value,
    });
  };

  const handleSelect = (option) => {
    dispatch({
      type: "tag",
      tag: option,
    });
    // settag(option);
  };
  const handleSubmit = (e) => {
    if (e.type === "submit") {
      e.preventDefault();
    }
    if (!text) return;
    const newTodo = {
      title: text,
      tag: tag,
      meta: {
        important: important,
        isDone: false,
      },
    };
    addTodo(newTodo);
    /**
     * setText("");
     * setimportant(false);
     */
    dispatch({
      type: "text",
      text: "",
    });
    dispatch({
      type: "important",
      important: false,
    });
  };
  const handleInputFocus = () => dispatch({ type: "focused", focused: true });
  const handleInputBlur = () => {
    if (text || important) {
      return;
    } else {
      // setfocused(false);
      dispatch({
        type: "focused",
        focused: false,
      });
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FaCircleNotch
        className="add-icon"
        style={{
          display: `${focused ? "inline-block" : "none"}`,
        }}
        onClick={(e) => {
          handleSubmit(e);
        }}
      />
      <FaPlus
        style={{
          display: `${focused ? "none" : "block"}`,
        }}
        className="plus-icon"
      />
      <InputContainer>
        <Input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </InputContainer>
      <TagSelect tag={tag} handleSelect={handleSelect} />
      <FaStar
        color={`${important ? "gold" : "inherit"}`}
        onClick={() =>
          dispatch({
            type: "important",
            important: !important,
          })
        }
      />
    </FormContainer>
  );
}
