import React from "react";
import { connect } from "react-redux";
import Header from "./HeaderView/HeaderView";
// import Footer from "./FooterView/FooterView";
import { darkgreen } from "../../Utils/colors";
import { useWindowSize } from "../../Utils/window-size";

function Layout(props) {
  const windowHeight = useWindowSize().windowHeight;

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkgreen,
        minHeight: windowHeight
      }}
    >
      <Header {...props} />
      <div style={{ padding: 15 }}>{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
}

function mapStateToProps({ auth }, _) {
  return {
    isLoggedIn: auth.token ? true : false
  };
}

export default connect(mapStateToProps)(Layout);
