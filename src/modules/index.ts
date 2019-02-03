import { combineReducers } from 'redux';
import countReducer from './count';
import qiitaReducer from './qiita';

export default combineReducers({
  count: countReducer,
  qiita: qiitaReducer,
});
