import {takeEvery, call, put, take} from 'redux-saga/effects';

import {getQuestionsByCategory} from '../../services/categories';
import * as rootNavigation from '../../navigation/RootNavigation';
import categories from '../../constants/categories';

import {Types} from '../ducks/categories';
import {Types as QuizzTypes} from '../ducks/quizz';

const navigateQuestion = () => rootNavigation.navigate('Quest');

function* selectACategory({payload}) {
  const {categoryId} = payload;

  const questions = yield call(getQuestionsByCategory, categoryId);

  const categoryLabel = categories.filter(
    category => category.id === categoryId,
  )[0].label;

  yield put({
    type: Types.GET_QUESTIONS_SUCCESS,
    payload: {questions, categoryLabel},
  });

  yield take(QuizzTypes.NEW_QUESTION);

  yield call(navigateQuestion);
}

export default function* sagas() {
  yield takeEvery(Types.GET_QUESTIONS, selectACategory);
}
