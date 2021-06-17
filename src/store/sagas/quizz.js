import {takeEvery, call, put, select, delay} from 'redux-saga/effects';

import * as rootNavigation from '../../navigation/RootNavigation';
import '../../config/ReactotronConfig';

import {Types as QuizzTypes} from '../ducks/quizz';
import {Types as CategoriesTypes} from '../ducks/categories';
import Level from '../../constants/Level';

const navigateResults = () => rootNavigation.navigate('Results');

function* answerQuestionSaga() {
  const {question, selectedOption} = yield select(state => state.question);

  const {options, correct_answer} = question;
  question.selectedAnswer = options[selectedOption];

  const isCorrect = options[selectedOption] === correct_answer;

  yield put({
    type: QuizzTypes.ANSWER_QUESTION_RETURN,
    payload: {
      question,
      isCorrect,
    },
  });
}

function* selectNewQuestion() {
  const {questions, trail, level, questionsAnswered, corrects, wrongs} =
    yield select(state => state.quizz);

  if (questionsAnswered < 10) {
    // seleciona uma questao com o nivel adequado
    // 2 erros seguidos desce ou permanece no nivel easy
    // 2 acertos seguidos sobe ou permanece no nivel hard
    let newLevel = level;
    let combo = 0;

    trail.map(isCorrect => {
      if (isCorrect) {
        combo = combo < 0 ? 1 : combo + 1;
      } else {
        combo = combo > 0 ? -1 : combo - 1;
      }

      return isCorrect;
    });

    if (combo > 1) {
      newLevel = level === Level.EASY ? Level.MEDIUM : Level.HARD;
    } else if (combo < -1) {
      newLevel = level === Level.HARD ? Level.MEDIUM : Level.EASY;
    }

    const newQuestion = questions[newLevel].filter(
      question =>
        corrects.filter(correctQuestion => {
          console.tron.log('corrects', correctQuestion.id, question.id);
          return correctQuestion.id === question.id;
        }).length === 0 &&
        wrongs.filter(wrongQuestion => {
          console.tron.log('corrects', wrongQuestion.id, question.id);
          return wrongQuestion.id === question.id;
        }).length === 0,
    )[0];

    yield delay(2000);

    yield put({
      type: QuizzTypes.NEW_QUESTION,
      payload: {
        newLevel,
        newQuestion,
      },
    });
  } else {
    yield put({
      type: QuizzTypes.FINISH_QUIZZ,
    });
  }
}

function* finishQuizz() {
  yield call(navigateResults);
}

export default function* sagas() {
  yield takeEvery(QuizzTypes.ANSWER_QUESTION, answerQuestionSaga);
  yield takeEvery(QuizzTypes.ANSWER_QUESTION_RETURN, selectNewQuestion);
  yield takeEvery(CategoriesTypes.GET_QUESTIONS_SUCCESS, selectNewQuestion);
  yield takeEvery(QuizzTypes.FINISH_QUIZZ, finishQuizz);
}
