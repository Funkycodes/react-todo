import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import Tag from "../shared/tag/Tag";
import "./TagSelect.css";

function TagSelect({ selectedTag, handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const { tags } = useContext(TodoContext);
  return (
    <div className="tag-select">
      <ul className={`options ${isOpen ? "open" : ""}`}>
        {Object.entries(tags).map((tag) => (
          <li
            className="option"
            onClick={() => {
              handleSelect(tag[0]);
              setIsOpen(false);
            }}
          >
            {tag[1]} {tag[0]}
          </li>
        ))}
      </ul>
      <span className="selected-tag" onClick={() => setIsOpen(!isOpen)}>
        <Tag tagName={selectedTag} tagIcon={tags[selectedTag]} />
      </span>
    </div>
  );
}

export default TagSelect;
