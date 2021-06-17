import {all, fork} from 'redux-saga/effects';

import categories from './categories';
import quizz from './quizz';

export default function* sagas() {
  yield all([fork(categories), fork(quizz)]);
}
