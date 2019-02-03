import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import countReducer from './modules/count';
import qiitaReducer from './modules/qiita';

const rootReducer = combineReducers({
  count: countReducer,
  qiita: qiitaReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
