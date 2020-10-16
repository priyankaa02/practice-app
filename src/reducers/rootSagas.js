import {all} from 'redux-saga/effects';
import authSaga from './auth/authSaga';
import adminSaga from './admin/adminSaga';
import commonSaga from './common/commonSaga'

export default function* sagas() {
  yield all([
    ...authSaga,
    ...adminSaga,
    ...commonSaga,
  ]);
}
