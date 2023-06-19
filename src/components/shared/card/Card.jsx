import styled from "styled-components";
// Trying out CSS-in-JS
const Container = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${({ dark }) => (dark ? "rgba(0,0,0.4)" : "#fff")};
  color: ${({ dark }) => (dark ? "#fff" : "#333")};
  align-items: start;
  justify-content: center;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
`;
function Card({ children, dark }) {
  return <Container dark={dark}>{children}</Container>;
}
export default Card;
