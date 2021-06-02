import {takeEvery, call, put} from 'redux-saga/effects';

import {getQuestionsByCategory} from '../../services/categories';
import * as rootNavigation from '../../navigation/RootNavigation';
import {Types} from '../ducks/categories';

const navigateQuestion = () => {
  console.log('cheguei aqui');
  return rootNavigation.navigate('Quest');
};

function* selectACategory({payload}) {
  const {categoryId} = payload;

  const questions = yield call(getQuestionsByCategory, categoryId);

  yield put({
    type: Types.GET_QUESTIONS_SUCCESS,
    payload: {questions},
  });

  yield call(navigateQuestion);
}

export default function* sagas() {
  yield takeEvery(Types.GET_QUESTIONS, selectACategory);
}
