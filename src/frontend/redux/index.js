import { createStore, combineReducers } from "redux";
import { boardList, todoList, tasks } from "./reducers";

const reducer = combineReducers({
    boardList, 
    todoList, 
    tasks
});

const store = createStore(reducer);

export default store;