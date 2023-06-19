import styled from "styled-components";
import { Card, Tag } from "../shared";

export const ItemTag = styled(Tag)`
  margin-top: 1rem;
`;

export const TodoItemCard = styled(Card)`
  padding: 0.5rem;
  gap: 1rem;
  align-items: start;
  justify-content: space-between;
  background-color: #fff;
  flex-wrap: nowrap;
`;
export const TaskInfo = styled.div`
  flex: 1;
  & span[data-attr="name"] {
    color: #f2f2f2;
  }
`;
export const CtaContainer = styled.div`
  display: flex;
  gap: 0.2rem;

  & button {
    background: none;
    padding: 0;
    color: white;
  }
`;
