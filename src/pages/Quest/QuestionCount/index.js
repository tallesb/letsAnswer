import React from 'react';
import {useSelector} from 'react-redux';

import Status from '../../../constants/StatusQuestion';

import {
  Container,
  CategoryLabel,
  CurrentQuestionNumber,
  Dot,
  DotsContainer,
  QuestionContainer,
  TotalQuestions,
} from './styles';

const QuestionCount = () => {
  const {trail, questionsAnswered, categoryLabel} = useSelector(
    state => state.quizz,
  );

  return (
    <Container>
      <CategoryLabel>{`${categoryLabel} Quizz`}</CategoryLabel>
      <QuestionContainer>
        <CurrentQuestionNumber>{`Question ${
          questionsAnswered + 1
        }`}</CurrentQuestionNumber>
        <TotalQuestions>{'/10'}</TotalQuestions>
      </QuestionContainer>
      <DotsContainer>
        {[...Array(10).keys()].map(number => {
          let status = null;

          if (trail.length > number) {
            status = trail[number] ? Status.CORRECT : Status.WRONG;
          } else {
            status = trail.length === number ? Status.CURRENT : Status.ONCOMING;
          }

          return <Dot status={status} key={number} />;
        })}
      </DotsContainer>
    </Container>
  );
};

export default QuestionCount;
