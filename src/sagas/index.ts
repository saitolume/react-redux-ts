import { all } from 'redux-saga/effects';
import qiitaSaga from './qiita';

export default function* rootSaga() {
  yield all([...qiitaSaga]);
}
