import "./Button.css";
export default function Button({ children, type, userStyles, handleClick }) {
  return (
    <button
      className={`btn ${type}-btn`}
      style={userStyles}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
