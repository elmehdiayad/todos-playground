import { combineReducers } from "redux";
import todosReducer from "./components/todos/todos.slice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
