
import React from "react";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { helper } from '../helpers/utils';
import Routes from "./routes";
import Store from "../redux";


const { RouteWithSubRoutes } = helper;
const MasterRouter = () => (
    <Provider store={Store}>
      <Router>
          <Switch>
            {
              Routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))
            }
          </Switch>
      </Router>
    </Provider>
  );

export default MasterRouter;