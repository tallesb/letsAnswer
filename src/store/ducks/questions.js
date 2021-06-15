import {Types as CategoriesTypes} from './categories';
import StatusQuestion from '../../constants/StatusQuestion';

export const Types = {
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  ANSWER_QUESTION_WRONG: 'ANSWER_QUESTION_WRONG',
  ANSWER_QUESTION_CORRECT: 'ANSWER_QUESTION_CORRECT',
  NEW_QUESTION: 'NEW_QUESTION',
  SELECT_OPTION: 'SELECT_OPTION',
};

const INITIAL_STATE = {
  questions: [],
  corrects: [],
  wrongs: [],
  currentQuestion: null,
  questionsAnswered: 0,
  trail: [],
  selectedOption: null,
  level:
};

const shuffleQuestions = questions => {
  questions.map(question => {
    const {incorrect_answers, correct_answer} = question;

    question.options = [...incorrect_answers, correct_answer].sort(
      () => Math.random() - 0.5,
    );
  });

  return questions;
};

const shuffleAllQuestions = questionsList => ({
  easy: shuffleQuestions(questionsList.easy),
  medium: shuffleQuestions(questionsList.medium),
  hard: shuffleQuestions(questionsList.hard),
});

export default function reducer(state = INITIAL_STATE, action) {
  const {type} = action;

  switch (type) {
    case CategoriesTypes.GET_QUESTIONS_SUCCESS:
      const questions = shuffleAllQuestions(action.payload.questions);
      const currentQuestion = questions.easy[0];

      return {
        ...INITIAL_STATE,
        questions,
        currentQuestion,
      };
    case Types.ANSWER_QUESTION_CORRECT:
      return {
        ...state,
        questionsAnswered: state.questionsAnswered + 1,
        corrects: [...corrects, action.payload.currentQuestion],
        trail: [...trail, StatusQuestion.CORRECT],
      };
    case Types.ANSWER_QUESTION_WRONG:
      return {
        ...state,
        questionsAnswered: state.questionsAnswered + 1,
        wrongs: [...wrongs, action.payload.currentQuestion],
        trail: [...trail, StatusQuestion.WRONG],
      };
    case Types.NEW_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload.currentQuestion,
      };
    case Types.SELECT_OPTION:
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
      };
    default:
      return state;
  }
}

export const answerQuestion = () => ({
  type: Types.ANSWER_QUESTION,
});

export const selectOption = selectedOption => ({
  type: Types.SELECT_OPTION,
  payload: {
    selectedOption,
  },
});
