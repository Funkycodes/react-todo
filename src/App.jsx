import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";

import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import TodoForm from "./components/todo-form/TodoForm";

import { HomePage, ImportantPage, MyDayPage } from "./pages";
import { FaBars } from "react-icons/fa";

import "./App.css";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Run something before running feedback
  const runWithFeedback = () => {
    setMenuIsOpen(() => false);
  };
  const toggleMenuState = () => {
    setMenuIsOpen((menustate) => !menustate);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router>
          <TodoProvider>
            <FaBars className="toggle" onClick={toggleMenuState} />
            <Menu isOpen={menuIsOpen} navFunc={runWithFeedback} />
            <div className="utility"></div>
            <main>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="important" element={<ImportantPage />} />
                <Route path="my_day" element={<MyDayPage />} />
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
