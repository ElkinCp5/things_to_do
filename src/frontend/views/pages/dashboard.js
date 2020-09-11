/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Dashboard from "../layouts/dashboard";
import {
  Row, Col, Card,
} from 'antd';

export default (props) => {
  let { routes, match } = props;
  let { params } = match;
  return (
    <Dashboard className="container" param={ params } routes={routes}/>
  );
};