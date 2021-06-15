import {takeEvery, call, put, select} from 'redux-saga/effects';

import {Types as QuestionsTypes} from '../ducks/questions';

function* answerQuestionSaga() {
  const {currentQuestion, selectedOption} = yield select(
    state => state.questions,
  );

  const {options, correct_answer} = currentQuestion;

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
