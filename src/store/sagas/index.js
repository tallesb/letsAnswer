import {all, fork} from 'redux-saga/effects';

import categories from './categories';
import questions from './questions';

export default function* sagas() {
  yield all([fork(categories), fork(questions)]);
}
