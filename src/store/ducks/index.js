import {combineReducers} from 'redux';

import categories from './categories';
import quizz from './quizz';
import question from './question';

export default combineReducers({
  categories,
  quizz,
  question,
});
