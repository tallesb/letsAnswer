import {all, fork} from 'redux-saga/effects';

import categories from './categories';

export default function* sagas() {
  yield all([fork(categories)]);
}
