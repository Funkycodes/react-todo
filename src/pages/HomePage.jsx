import { FaHome } from "react-icons/fa";
import { Page } from "../components/shared";
import TodoList from "../components/todo-list/TodoList";

function HomePage() {
  return (
    <Page pageTitle={"Home"} pageIcon={<FaHome />}>
      <div className="todo-container">
        <TodoList />
      </div>
    </Page>
  );
}

export default HomePage;
