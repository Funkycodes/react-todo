import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import Tag from "../shared/tag/Tag";
import {
  SelectContainer,
  SelectedOption,
  OptionsList,
  Option,
} from "./TagSelectStyles";

function TagSelect({ tag, handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const { tags } = useContext(TodoContext);
  return (
    <SelectContainer>
      <OptionsList open={isOpen}>
        {Object.entries(tags).map((tagItem) => (
          <Option
            className="option"
            onClick={() => {
              handleSelect(tagItem[0]);
              setIsOpen(false);
            }}
          >
            {tagItem[1]} {tagItem[0]}
          </Option>
        ))}
      </OptionsList>
      <SelectedOption onClick={() => setIsOpen(!isOpen)}>
        <Tag tagName={tag} tagIcon={tags[tag]} />
      </SelectedOption>
    </SelectContainer>
  );
}

export default TagSelect;
