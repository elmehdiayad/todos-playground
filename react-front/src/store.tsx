import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
// dev tools middleware
const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
sagaMiddleware.run(watcherSaga);

export default store;
