import React from "react";
import { useWindowSize } from "../../../Utils/window-size";
import { lightgreen } from "../../../Utils/colors";

function Footer() {
  const windowWidth = useWindowSize().windowWidth;
  return (
    <footer
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        left: 0,
        minWidth: windowWidth,
        color: lightgreen
      }}
    >
      Made by Natalia
    </footer>
  );
}
export default Footer;
