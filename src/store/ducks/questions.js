import {Types as CategoriesTypes} from './categories';

export const Types = {
  ANSWER_QUESTION: 'ANSWER_QUESTION',
};

const INITIAL_STATE = {
  questions: [],
  corrects: [],
  wrongs: [],
  questionsAnswered: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type} = action;

  switch (type) {
    case CategoriesTypes.GET_QUESTIONS_SUCCESS:
      return {
        ...INITIAL_STATE,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
}
