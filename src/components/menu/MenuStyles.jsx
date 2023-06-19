import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.aside`
  width: 14rem;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  padding: 0.2rem;
  --menu-padding: 0.5rem;

  @media (max-width: 760px) {
    position: absolute;
    z-index: 9998;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in, padding 0.96s ease-out;
    background-color: #fff;

    /* if menu is Open*/
    ${({ isOpen }) =>
      isOpen ? "transform: translateX(0);padding-top: 2rem;" : ""}
  }
`;
export const ProfileContainer = styled.div`
  padding: var(--menu-padding);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & img {
    width: 2.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const ProfileDetails = styled.div`
  display: flex;
  flex-flow: column;
`;
export const ProfileNetStat = styled.span`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 12px;
`;
export const NavMenu = styled.nav`
  padding: 0;
  display: flex;
  flex-flow: column;
  gap: 0.2rem;
  position: relative;
  flex: 1;
`;
export const NavMenuLink = styled(NavLink)`
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--menu-padding);
  font-size: 14px;
  text-decoration: none;
  color: hsla(0, 0%, 0%, 0.6);

  &.active,
  &:hover {
    border-radius: 0.25rem;
    color: hsla(0, 0%, 0%, 1);
    background-color: lightgrey;
  }

  & span {
    width: 0.75rem;
    font-size: 0.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: grey;
    color: white;
    text-align: center;
    margin-left: auto;
  }
`;

export const LogOutButton = styled(NavMenuLink)`
  position: absolute;
  left: 0;
  bottom: 0.8rem;
  width: 100%;
  cursor: pointer;
`;
