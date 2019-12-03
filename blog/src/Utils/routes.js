import React from "react";
import BlogView from "../Views/BlogView/BlogView";
import ListBlogsUserView from "../Views/BlogView/ListBlogsUserView";
import AuthView from "../Views/AuthView/AuthView";
import Home from "../Views/HomeView/HomeView";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";

export const PATHS = {
  HOME: "/",
  ADD: "/add",
  EDIT: "/edit",
  EDITBLOG: "/edit/:blogId",
  SEARCH: "/search",
  CONTACT: "/contact",
  LOGIN: "/login",
  LOGOUT: "/logout"
};

export const routes = [
  {
    showInMenu: false,
    path: PATHS.HOME,
    component: Home
  },
  {
    showInMenu: true,
    showIfLogIn: true,
    showIfLogOut: false,
    path: PATHS.ADD,
    component: BlogView,
    itemText: "Add",
    itemIcon: <AddIcon />
  },
  {
    showInMenu: true,
    showIfLogIn: true,
    showIfLogOut: false,
    path: PATHS.EDIT,
    component: ListBlogsUserView,
    itemText: "Edit",
    itemIcon: <EditIcon />
  },
  {
    showInMenu: false,
    path: PATHS.EDITBLOG,
    component: BlogView,
  },
  {
    showInMenu: true,
    showIfLogIn: true,
    showIfLogOut: true,
    path: PATHS.SEARCH,
    component: Home,
    itemText: "Search",
    itemIcon: <SearchIcon />
  },
  {
    showInMenu: true,
    showIfLogIn: true,
    showIfLogOut: true,
    path: PATHS.CONTACT,
    component: Home,
    itemText: "Contact",
    itemIcon: <MailIcon />
  },
  {
    showInMenu: true,
    showIfLogIn: false,
    showIfLogOut: true,
    path: PATHS.LOGIN,
    component: AuthView,
    itemText: "Login",
    itemIcon: <AccountCircle />
  },
  {
    showInMenu: true,
    showIfLogIn: true,
    showIfLogOut: false,
    path: PATHS.LOGOUT,
    component: Home,
    itemText: "Logout",
    itemIcon: <ExitToApp />
  }
];
