import React, { useState } from "react";
import { lightgreen } from "../../../../Utils/colors";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerMenuMobile from "./DrawerMenuMobile";

function MenuMobile(props) {
  const [isDrawerOpen, openDrawer] = useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    openDrawer(open);
  };
  return (
    <>
      <IconButton aria-label="menu" onClick={() => openDrawer(!isDrawerOpen)}>
        <MenuIcon fontSize="large" style={{ color: lightgreen }} />
      </IconButton>
      <DrawerMenuMobile
        isOpen={isDrawerOpen}
        toggleDrawer={open => toggleDrawer(open)}
        {...props}
      />
    </>
  );
}
export default MenuMobile;
