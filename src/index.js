import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ClientRegister from "./pages/ClientRegister/ClientRegister.js";
import ProviderRegister from "./pages/ProviderRegister/ProviderRegister.js";
import "./global.css";
import HomePage from "./pages/HomePage/HomePage.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientLogin from "./pages/ClientLogin/ClientLogin.js";
import ProviderLogin from "./pages/ProviderLogin/ProviderLogin.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login/client">
          <ClientLogin />
        </Route>

        <Route exact path="/login/provider">
          <ProviderLogin />
        </Route>

        <Route exact path="/register/client">
          <ClientRegister />
        </Route>

        <Route exact path="/register/provider">
          <ProviderRegister />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
