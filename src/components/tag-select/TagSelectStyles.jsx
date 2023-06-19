import styled from "styled-components";
export const SelectContainer = styled.div`
  width: 72px;
  display: flex;
  justify-content: center;
`;
export const OptionsList = styled.ul`
  background-color: lightgray;
  width: 120px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: calc(100% + 2px);
  right: 4px;
  border-radius: 4px;
  box-shadow: 0px 0px 1px black, 1px 1px 4px #333;
  overflow: hidden;
  display: none;

  ${({ open }) => (open ? "display:block;" : "")}
`;
export const Option = styled.li`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

export const SelectedOption = styled.span`
  font-size: 0.625rem;
  cursor: pointer;
`;
