import { useEffect, useContext, useState } from "react";
import { FaCircle, FaEllipsisH, FaHome, FaStar, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import TodoContext from "../../context/TodoContext";
import "./Menu.css";

const UserProfile = (user) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, [navigator.onLine]);

  return (
    <div className="profile">
      <img src="/src/components/menu/download.jpeg" alt="" />
      <div className="user">
        <span className="user-name">{user.name}</span>
        <span className="netstat">
          <FaCircle size={8} color={`${isOnline ? "green" : "orange"}`} />{" "}
          You're {isOnline ? "online" : "offline"}
          <FaEllipsisH size={8} />
        </span>
      </div>
    </div>
  );
};

function Menu({ isOpen, navFunc }) {
  const { importantTodo, todo } = useContext(TodoContext);
  return (
    <aside className={`menu ${isOpen ? "open" : ""}`}>
      <UserProfile {...{ name: "Habib Hassan" }} />
      <nav>
        <NavLink
          className="navlink"
          activeClassName="active"
          to="/my_day"
          onClick={navFunc}
        >
          <FaSun /> My Day
        </NavLink>
        <NavLink
          className="navlink"
          activeClassName="active"
          to="/important"
          onClick={navFunc}
        >
          <FaStar />
          Important
          <span>{importantTodo.length}</span>
        </NavLink>
        <NavLink
          className="navlink"
          activeClassName="active"
          to="/"
          onClick={navFunc}
        >
          <FaHome />
          Home
          <span>{todo.length}</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Menu;
