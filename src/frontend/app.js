/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Row, Col, Card,
} from 'antd';

const App = (props) => (
    <div className="container">
        <div className="separator"></div>
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-head purple darck-3">
                        <div className="title white-text">
                            <i className="material-icons right">event_note</i>
                            <span id="badgeCound" className="badge white-text">2 Tasks</span>
                        </div>
                        <h4 className="title white-text">Things to do</h4> 
                    </div>
                    <div id="card-content"className="card-content ">
                        <ul id="tasks_month" className="tasks_month">
                            <li id="dateTasksMonth" className="dateTasksMonth">
                                <h5>HOla 
                                <span className="badge grey-text rigth">
                                    <i className="material-icons">keyboard_arrow_down</i>
                                </span>
                                </h5><br/>
                                
                                <ul id="task-item-content">
                                    <li id="task-item-${tasks.id}" className="task-item">
                                        <div className="marker" style={
                                            {
                                                border: "4px solid darkviolet"
                                            }
                                        }></div>
                                        <div className="date">tasks</div>
                                        <div className="info">
                                            <div className="title">
                                            <i className="material-icons">schedule</i>
                                            <span>Title</span>
                                            </div>
                                            <p>Body </p>
                                            <span>hour</span>
                                            <button id="task-item-delect" 
                                                    item="task-item-${tasks.id}"
                                                    className="btn-flat btn-floating waves-effect waves-light right grey-text purple">
                                                <i className="material-icons">delete</i>
                                            </button>
                                        </div>
                                        <div className="marker-end" style={
                                            {
                                                border: "4px solid darkgrey"
                                            }
                                        }></div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <div className="col s12">
                                <form id="form-task">
                                    <div className="input-field input-field-circle">
                                        <input id="input-task" name="body-task" type="text" placeholder="Describe your task... 'enter to add task'" className="validate" />
                                        <i className="material-icons">add_circle</i>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">

        </div>
    </div>  
);

export default App;
