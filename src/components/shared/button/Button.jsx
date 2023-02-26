import "./Button.css";
export default function Button({ children, type, userStyles }) {
  return (
    <button className={`btn ${type}-btn`} style={userStyles}>
      {children}
    </button>
  );
}
