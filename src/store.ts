import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './modules';
import rootSaga from './sagas';

const devMiddlewares = [];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  devMiddlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(...devMiddlewares, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
