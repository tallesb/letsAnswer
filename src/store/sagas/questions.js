import {takeEvery, call, put, select} from 'redux-saga/effects';

import {Types as QuestionsTypes} from '../ducks/quizz';

function* answerQuestionSaga() {
  const {question, selectedOption} = yield select(state => state.question);

  const {options, correct_answer} = question;

  const isCorrect = options[selectedOption] === correct_answer;

  if (isCorrect) {
    yield put({
      type: QuestionsTypes.ANSWER_QUESTION_CORRECT,
    });
  }
}

export default function* sagas() {
  yield takeEvery(QuestionsTypes.ANSWER_QUESTION, answerQuestionSaga);
}
