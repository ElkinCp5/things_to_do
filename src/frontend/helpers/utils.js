
import React from "react";
import { Route, Redirect } from "react-router-dom";

let account = true;
let authentication = true;
let verify = true;

const RouteWithSubRoutes = route => {
    let isAuth = route.isAuth != undefined ? route.isAuth : false;
    //console.log('RouteWithSubRoutes: ',route)
    if(isAuth ){
      return (
        <PrivateRoute isAuthentication={authentication} isVerify={verify} path={route.path} key={`${route.path}`}>
          <Route path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        </PrivateRoute>
      )
    }else if(!isAuth && authentication){
      return (
      <Route>
          <Redirect to="/dashboard"/>
      </Route>);
    }else if(!isAuth && !authentication){
      return (
        <Route path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
      );
    }
  }

  export default { RouteWithSubRoutes };