import React from "react";
//import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from '../helpers/utils';
import Routes from "./routes";
//import Store from "../redux";

export default () => (
  //<Provider >
    <Router>
        <Switch>
          {
            Routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))
          }
        </Switch>
    </Router>
  //</Provider>
);