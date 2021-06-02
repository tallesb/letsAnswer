import api from './api';

const Difficulties = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};

const getCallback = (status, res) => res;

export const getQuestions = async (categoryId, difficulty) => {
  const params = `amount=10&difficulty=${difficulty}&type=multiple&category=${categoryId}`;

  const result = await api.get(`api.php?${params}`, getCallback);

  return result;
};

export const getQuestionsByCategory = async categoryId => {
  // Baixar 10 questoes faceis, medias e dificeis, totalizando 30 questoes no total
  const easyQuestions = await getQuestions(categoryId, Difficulties.EASY);
  const mediumQuestions = await getQuestions(categoryId, Difficulties.MEDIUM);
  const hardQuestions = await getQuestions(categoryId, Difficulties.HARD);

  return {
    easy: easyQuestions.results,
    medium: mediumQuestions.results,
    hard: hardQuestions.results,
  };
};
