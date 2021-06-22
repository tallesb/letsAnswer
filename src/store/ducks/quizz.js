import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {Types as CategoriesTypes} from './categories';
import Level from '../../constants/Level';

export const Types = {
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  ANSWER_QUESTION_RETURN: 'ANSWER_QUESTION_RETURN',
  NEW_QUESTION: 'NEW_QUESTION',
  SELECT_OPTION: 'SELECT_OPTION',
  FINISH_QUIZZ: 'FINISH_QUIZZ',
  QUIT_QUIZZ: 'QUIT_QUIZZ',
};

const INITIAL_STATE = {
  questions: [],
  corrects: [],
  wrongs: [],
  questionsAnswered: 0,
  trail: [],
  loading: false,
  level: Level.EASY,
  categoryLabel: null,
};

const shuffleQuestions = questions => {
  questions.map(question => {
    const {incorrect_answers, correct_answer} = question;
    question.id = uuidv4();
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

export default function reducer(state = INITIAL_STATE, {type, payload = null}) {
  let questions = null;

  switch (type) {
    case CategoriesTypes.GET_QUESTIONS_SUCCESS:
      questions = shuffleAllQuestions(payload.questions);

      return {
        ...INITIAL_STATE,
        questions,
        categoryLabel: payload.categoryLabel,
      };
    case Types.ANSWER_QUESTION:
      return {
        ...state,
        loading: true,
      };
    case Types.ANSWER_QUESTION_RETURN:
      return {
        ...state,
        questionsAnswered: state.questionsAnswered + 1,
        corrects: payload.isCorrect
          ? [...state.corrects, payload.question]
          : state.corrects,
        wrongs: !payload.isCorrect
          ? [...state.wrongs, payload.question]
          : state.wrongs,
        trail: [...state.trail, payload.isCorrect],
      };
    case Types.NEW_QUESTION:
      return {
        ...state,
        level: payload.newLevel,
        loading: false,
      };
    case Types.QUIT_QUIZZ:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const answerQuestion = () => ({
  type: Types.ANSWER_QUESTION,
});

export const quitQuizz = () => ({
  type: Types.QUIT_QUIZZ,
});
