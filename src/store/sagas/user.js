import {takeEvery, call, put, select, delay} from 'redux-saga/effects';

import * as rootNavigation from '../../navigation/RootNavigation';
import '../../config/ReactotronConfig';

import {Types as UserTypes} from '../ducks/user';

const navigateDashboard = () => rootNavigation.navigate('AppRoute');

function* loginSaga() {
  yield call(navigateDashboard);
}

export default function* sagas() {
  yield takeEvery(UserTypes.LOGIN, loginSaga);
}
