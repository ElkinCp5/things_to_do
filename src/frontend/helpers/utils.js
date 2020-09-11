
import React from "react";
import { Route, Redirect } from "react-router-dom";

let account = true;
let authentication = true;
let verify = true;

const RouteWithSubRoutes = route => {
    let isAuth = route.isAuth != undefined ? route.isAuth : false;
    console.log('RouteWithSubRoutes: ',route)
    return (
      <Route path={route.path}
          render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          )}
        />
    );
  }

  export { RouteWithSubRoutes };