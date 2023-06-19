import React from "react";
import { InputContainer } from "./InputStyles";

const Input = ({ label, ...attributes }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input {...attributes} />
    </InputContainer>
  );
};

export default Input;
