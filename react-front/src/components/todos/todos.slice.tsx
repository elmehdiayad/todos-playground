import { TodoProps } from "../common/todo/todo";

export interface TodoAction {
  type: string;
  payload: any;
}

const initialTodos: TodoProps[] = [];

const todosReducer = (state = initialTodos, action: TodoAction) => {
  switch (action.type) {
    case "todos/getTodos": {
      return action.payload.todos;
    }
    case "todos/error": {
      //TODO: handle errors
      return state;
    }
    default:
      return state;
  }
};

export default todosReducer;
