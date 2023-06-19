import React from "react";

import { HeaderWrapper, HeaderTitle } from "./HeaderStyles";
import { FaWizardsOfTheCoast as HeaderIcon } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <HeaderIcon /> Serenity
      </HeaderTitle>
    </HeaderWrapper>
  );
};
export default Header;
