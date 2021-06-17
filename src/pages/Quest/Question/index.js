import React from 'react';
import {useSelector} from 'react-redux';

import QuestionOptions from '../QuestionsRadio';

import {Container, QuestionDescription} from './styles';

const Question = () => {
  const {question} = useSelector(state => state.question);

  console.tron.log('current', question);

  return (
    <Container>
      <QuestionDescription>{question.question}</QuestionDescription>
      <QuestionOptions question={question} />
    </Container>
  );
};

export default Question;
