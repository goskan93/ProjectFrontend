import React from "react";
// import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { darkblue } from "../../../../Utils/colors";
import { routes } from "../../../../Utils/routes";
import { logout } from "../../../../Store/Modules/authModule";

//TODO: cahnge colors of icons and background, fontWeigth bigger
function DrawerMenuMobile(props) {
  const { toggleDrawer, isOpen } = props;

  return (
    <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
      <nav
        style={{ width: "auto" }}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List style={{ color: darkblue, padding: 0 }}>
          {routes.map((item, index) => {
            const showLink =
              item.showInMenu &&
              ((item.showIfLogIn && props.isLoggedIn) ||
                (item.showIfLogOut && !props.isLoggedIn));
            return (
              showLink && (
                <React.Fragment key={index}>
                  <ListItem
                    button
                    onClick={() =>
                      item.itemText !== "Logout"
                        ? props.history.push(item.path)
                        : props.dispatch(logout())
                    }
                  >
                    <ListItemIcon>{item.itemIcon}</ListItemIcon>
                    <ListItemText primary={item.itemText} />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              )
            );
          })}
        </List>
      </nav>
    </Drawer>
  );
}
// export default connect()(withRouter(DrawerMenuMobile));
export default withRouter(DrawerMenuMobile);
