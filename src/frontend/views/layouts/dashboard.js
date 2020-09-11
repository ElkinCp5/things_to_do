import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";
import { RouteWithSubRoutes } from "../../helpers/utils";

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
    console.log({properties: this.props});
    return (
      <Router>
        <Switch>
            {
                routes.map((route, index) => (
                <RouteWithSubRoutes key={`subroute-${index}`} {...route} />
                ))
            }
        </Switch>
      </Router>
    );
  }
}
export default withRouter(dashboardLayout);