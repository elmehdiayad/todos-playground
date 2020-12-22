import axios from "axios";
import { TodoAction } from "./components/todos/todos.slice";

export function all() {
  return axios({
    method: "get",
    url: "http://localhost:8080/todos",
  });
}

export function newTodo(action: TodoAction) {
  return axios({
    method: "post",
    url: "http://localhost:8080/todos",
    data: {
      title: action.payload.title,
      description: action.payload.description,
      completed: false,
      deleted: false,
    },
  });
}

export function completeTodo(action: TodoAction) {
  return axios({
    method: "put",
    url: "http://localhost:8080/todos/complete/" + action.payload.id,
  });
}

export function archiveTodo(action: TodoAction) {
  return axios({
    method: "put",
    url: "http://localhost:8080/todos/archive/" + action.payload.id,
  });
}
