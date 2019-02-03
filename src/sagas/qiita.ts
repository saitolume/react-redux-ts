import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionType, QiitaAction, setUser } from '../modules/qiita';

// API
const fetchQiitaData = async (id: string) => {
  return await fetch(`https://qiita.com/api/v2/users/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
    },
  }).then(res => {
    return res.json();
  });
};

// saga
function* fetchUser(action: QiitaAction) {
  const { id, name, description } = yield call(fetchQiitaData, action.id);
  yield put(setUser(id, name, description));
}

const qiitaSaga = [takeEvery(ActionType.FETCH_USER, fetchUser)];
export default qiitaSaga;
