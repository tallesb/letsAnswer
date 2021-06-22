import {Types as QuizzTypes} from './quizz';

export const Types = {
  SELECT_OPTION: 'SELECT_OPTION',
};

const INITIAL_STATE = {
  question: null,
  selectedOption: null,
};

export default function reducer(state = INITIAL_STATE, {type, payload = null}) {
  switch (type) {
    case QuizzTypes.NEW_QUESTION:
      return {
        ...INITIAL_STATE,
        question: payload.newQuestion,
      };
    case Types.SELECT_OPTION:
      return {
        ...state,
        selectedOption: payload.selectedOption,
      };
    default:
      return state;
  }
}

export const selectOption = selectedOption => ({
  type: Types.SELECT_OPTION,
  payload: {
    selectedOption,
  },
});
