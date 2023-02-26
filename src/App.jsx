import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Header from "./components/header/Header";
import TodoItem from "./components/todo-item/TodoItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <TodoItem taskName="Write Javascript Code" taskTag="Riddim" />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
