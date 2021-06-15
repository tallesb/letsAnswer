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
  const {trail, questionsAnswered} = useSelector(state => state.questions);

  return (
    <Container>
      <CategoryLabel>{'Mahtematics Quiz'}</CategoryLabel>
      <QuestionContainer>
        <CurrentQuestionNumber>{`Question ${
          questionsAnswered + 1
        }`}</CurrentQuestionNumber>
        <TotalQuestions>{'/10'}</TotalQuestions>
      </QuestionContainer>
      <DotsContainer>
        {[...Array(10).keys()].map(number => {
          const questionStatus =
            trail.length > number ? trail[number] : Status.CURRENT;
          return <Dot status={questionStatus} key={number} />;
        })}
      </DotsContainer>
    </Container>
  );
};

export default QuestionCount;
