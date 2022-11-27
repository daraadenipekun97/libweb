import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../Reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (function store(initialState) {
  const store = createStore(
    reducers(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
})();
