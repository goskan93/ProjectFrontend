import React from "react";
import MenuMobile from "./MenuMobile";
import MenuFull from "./MenuFull";
import { breakpoint } from "../../../../Utils/params";
import { useWindowSize } from "../../../../Utils/window-size";

function Menu(props) {
  const windowWidth = useWindowSize().windowWidth;
  return windowWidth < breakpoint ? (
    <MenuMobile {...props} />
  ) : (
    <MenuFull {...props} />
  );
}

export default Menu;
