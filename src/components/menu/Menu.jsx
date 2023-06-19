import { useEffect, useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

import {
  MenuContainer,
  NavMenu,
  NavMenuLink,
  ProfileContainer,
  ProfileDetails,
  ProfileNetStat,
  LogOutButton,
} from "./MenuStyles";

import {
  FaCircle,
  FaEllipsisH,
  FaHome,
  FaSignOutAlt,
  FaStar,
  FaSun,
} from "react-icons/fa";

const UserProfile = (user) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, [navigator.onLine]);

  return (
    <ProfileContainer>
      <img src="/pfp.jpeg" alt="" />
      <ProfileDetails>
        <span className="user-name">{user.name}</span>
        <ProfileNetStat>
          <FaCircle size={8} color={`${isOnline ? "green" : "orange"}`} />{" "}
          You're {isOnline ? "online" : "offline"}
          <FaEllipsisH size={8} />
        </ProfileNetStat>
      </ProfileDetails>
    </ProfileContainer>
  );
};

function Menu({ isOpen, navFunc }) {
  const { importantTodo, todo } = useContext(TodoContext);
  return (
    <MenuContainer isOpen={isOpen}>
      <UserProfile name="Habib Hassan" />
      <NavMenu>
        <NavMenuLink activeClassName="active" to="/my_day" onClick={navFunc}>
          <FaSun /> My Day
        </NavMenuLink>
        <NavMenuLink activeClassName="active" to="/important" onClick={navFunc}>
          <FaStar />
          Important
          <span>{importantTodo.length}</span>
        </NavMenuLink>
        <NavMenuLink activeClassName="active" to="/" onClick={navFunc}>
          <FaHome />
          Home
          <span>{todo.length}</span>
        </NavMenuLink>
        <LogOutButton as="span">
          <FaSignOutAlt /> Logout
        </LogOutButton>
      </NavMenu>
    </MenuContainer>
  );
}

export default Menu;
