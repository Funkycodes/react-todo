import "./Tag.css";
function Tag({ tagName, tagIcon }) {
  return (
    <span className="tag">
      <span className="tag-icon">{tagIcon}</span>
      <span className="tag-name">{tagName}</span>
    </span>
  );
}

export default Tag;
