// Trying out CSS-in-JS
function Card({ children, dark, direction, userStyles }) {
  const styles = {
    display: "flex",
    flexDirection: direction,
    padding: "3rem",
    backgroundColor: dark ? "rgba(0,0,0.4)" : "#fff",
    color: dark ? "#fff" : "#333",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: "0.5rem",
    padding: "1rem",
    position: "relative",
    ...userStyles,
  };
  return (
    <div className="card" style={styles}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
  direction: "row",
  dark: false,
  userStyles: {},
};

export default Card;
