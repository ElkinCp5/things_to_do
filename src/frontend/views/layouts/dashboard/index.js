import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import { RouteWithSubRoutes } from "../../../helpers/utils";

class dashboardLayout  extends Component{

  constructor(props) {
    super(props);
    this.state = {
    collapsed: true,
      isToggleOn: false,
      isMobile: false
    }
    
  }

  render(){

    let { location, routes } = this.props;
    let { pathname } = location;
    /*console.log({layoutDahs: routes});*/
    return (
      <Router>
        <ul>
          {
            routes.map((route, index)=> 
              <li key={index}>
                <Link to={route.path}>{route.name}</Link>
              </li>)
          }
        </ul>
        <Switch>
            {
                routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
                ))
            }
        </Switch>
      </Router>
    );
  }
}
export default withRouter(dashboardLayout);