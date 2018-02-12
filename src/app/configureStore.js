import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}) {
  const middleware = [];
  let devTools = next => next;

  if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
  }

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      devTools
    ),
  );
}
