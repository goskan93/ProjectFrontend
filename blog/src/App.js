import React from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import "./CSS/reset-css.css";
import "./CSS/styles.css";
import { Layout } from "./Views";
import { routes } from "./Utils/routes";
import { store } from "./Store/index";

export default function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer
          autoClose={4000}
          closeOnClick
          position="top-right"
          hideProgressBar
          newestOnTop={false}
          rtl={false}
          pauseOnHover
        />
        <Layout>
          <Switch>{routeComponents}</Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}