import React from 'react';
import {useSelector} from 'react-redux';

import QuestionOptions from '../QuestionsRadio';

import {Container, QuestionDescription} from './styles';

const Question = () => {
  const {currentQuestion} = useSelector(state => state.questions);

  console.tron.log('current', currentQuestion);

  return (
    <Container>
      <QuestionDescription>{currentQuestion.question}</QuestionDescription>
      <QuestionOptions question={currentQuestion} />
    </Container>
  );
};

export default Question;
