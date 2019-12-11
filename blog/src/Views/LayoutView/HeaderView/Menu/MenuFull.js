import React from "react";
// import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { routes, PATHS } from "../../../../Utils/routes";
import { logout } from "../../../../Store/Modules/authModule";

function MenuFull(props) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
      className="navbar"
    >
      {routes.map((item, index) => {
        const showLink =
          item.showInMenu &&
          ((item.showIfLogIn && props.isLoggedIn) ||
            (item.showIfLogOut && !props.isLoggedIn));
        return (
          showLink && (
            <NavLink
              key={index}
              to={item.path}
              activeClassName="active-link"
              isActive={(match, _) => {
                if (item.itemText === "Logout") {
                  if (!match) return false;
                  props.dispatch(logout());
                  props.history.push(PATHS.HOME);
                  return true;
                }
                return match
              }}
            >
              {item.itemText}
            </NavLink>
          )
        );
      })}
    </nav>
  );
}
//export default connect()(withRouter(MenuFull));
export default withRouter(MenuFull);
