import React from "react";
import Menu from "./Menu/Menu";
import {  darkpink } from "../../../Utils/colors";

function Header(props) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        padding: 20
      }}
    >
      <span className="logo" style={{ color: darkpink, alignSelf: "center" }}>
        LOGO
      </span>
        <Menu {...props} />
    </header>
  );
}

export default Header;
