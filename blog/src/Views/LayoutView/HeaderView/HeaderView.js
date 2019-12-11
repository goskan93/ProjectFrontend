import React from "react";
import Menu from "./Menu/Menu";
import { darkgreen } from "../../../Utils/colors";

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
      <span className="logo" style={{ color: darkgreen, alignSelf: "center" }}>
        LOGO
      </span>
        <Menu {...props} />
    </header>
  );
}

export default Header;
