import { takeLatest, call, put } from "redux-saga/effects";
import { all, completeTodo, newTodo, archiveTodo } from "./api-calls";
import { TodoAction } from "./components/todos/todos.slice";

export function* watcherSaga() {
  yield takeLatest("todos/fetchAll", fetchAll);
  yield takeLatest("todos/add", add);
  yield takeLatest("todos/complete", complete);
  yield takeLatest("todos/archive", archive);
}

function* fetchAll() {
  try {
    const response = yield call(all);
    const todos = response.data;
    yield put({ type: "todos/getTodos", payload: { todos } });
  } catch (error) {
    console.log(error);
    yield put({ type: "todos/error", error });
  }
}

function* add(action: TodoAction) {
  try {
    yield call(newTodo, action);
    yield put({ type: "todos/fetchAll" });
  } catch (error) {
    console.log(error);
    yield put({ type: "todos/error", error });
  }
}

function* complete(action: TodoAction) {
  try {
    yield call(completeTodo, action);
    yield put({ type: "todos/fetchAll" });
  } catch (error) {
    console.log(error);
    yield put({ type: "todos/error", error });
  }
}

function* archive(action: TodoAction) {
  try {
    yield call(archiveTodo, action);
    yield put({ type: "todos/fetchAll" });
  } catch (error) {
    console.log(error);
    yield put({ type: "todos/error", error });
  }
}
