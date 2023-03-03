import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import TodoList from "./components/todo-list/TodoList";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/todo-form/TodoForm";
import { HomePage, ImportantPage, MyDayPage } from "./pages";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router>
          <TodoProvider>
            <Menu />
            <div className="utility"></div>
            <main>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <HomePage>
                      <div className="todo-container">
                        <TodoList />
                      </div>
                    </HomePage>
                  }
                />
                <Route
                  path="/important"
                  element={
                    <ImportantPage>
                      <div className="todo-container">
                        <TodoList displayOption="important" />
                      </div>
                    </ImportantPage>
                  }
                />
                <Route
                  path="/my_day"
                  element={
                    <MyDayPage>
                      <div class="todo-container">
                        <TodoList />
                      </div>
                    </MyDayPage>
                  }
                />
              </Routes>
              <TodoForm />
            </main>
          </TodoProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
