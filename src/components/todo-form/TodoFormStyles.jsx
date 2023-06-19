import styled from "styled-components";
export const FormContainer = styled.form`
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;

  & input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
  }
`;
export const InputContainer = styled.div`
  flex: 1;
  position: relative;
`;
/**
 * form > [class$="-icon"] {
 * font-size: 1rem;
 * cursor: pointer;
 * }
 */
