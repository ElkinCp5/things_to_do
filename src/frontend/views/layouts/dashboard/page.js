/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from ".";
import {
  Row, Col, Card,
} from 'antd';

export default (props) => {
  let { routes, match } = props;
  let { params } = match;
  /*console.log({PageDash: routes});*/
  return (
    <Layout className="container" param={params} routes={routes}/>
  );
};