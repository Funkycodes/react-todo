import { FaStar } from "react-icons/fa";
import { Page } from "../components/shared";
import TodoList from "../components/todo-list/TodoList";

function ImportantPage() {
  return (
    <Page pageTitle={"Important"} pageIcon={<FaStar />}>
      <div className="todo-container">
        <TodoList displayOption="important" />
      </div>
    </Page>
  );
}

export default ImportantPage;
