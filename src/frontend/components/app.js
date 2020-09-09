/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Row, Col, Content, Card,
} from 'antd';

const App = (props) => (
        <Content class="container">
            <div class="separator">{props.name}</div>
            <Row class="row">
                <Col span={24}>
                    <Card class="card">
                        <div class="card-head purple darck-3">
                            <h4 class="title white-text">Things to do
                                <i class="material-icons right">event_note</i>
                                <span id="badgeCound" class="badge white-text"> 2 Tasks </span>
                            </h4>
                        </div>
                        <div id="card-content"class="card-content ">
                            <ul id="tasks_month" class="tasks_month"></ul>
                        </div>
                        <div class="card-action">
                            <div class="row">
                                <div class="col s12">
                                    <form id="form-task">
                                        <div class="input-field input-field-circle">
                                            <input id="input-task" name="body-task" type="text" placeholder="Describe your task... 'enter to add task'" class="validate"></input>
                                            <i class="material-icons">add_circle</i>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Card >
                </Col>
            </Row>
            <Row class="row"> </Row>
        </Content>
);

export default App;
