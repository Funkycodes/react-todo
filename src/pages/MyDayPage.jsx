import { FaSun } from "react-icons/fa";
import { Page } from "../components/shared";
import TodoList from "../components/todo-list/TodoList";

function MyDayPage() {
  return (
    <Page pageIcon={<FaSun />} pageTitle="My Day">
      <div className="container">
        <TodoList />
      </div>
    </Page>
  );
}

export default MyDayPage;
