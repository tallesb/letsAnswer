import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {answerQuestion} from '../../store/ducks/questions';

import {
  Container,
  QuitButton,
  ButtonsContainer,
  QuitButtonLabel,
  NextButton,
  NextButtonLabel,
} from './styles';

import QuestionCount from './QuestionCount';
import Question from './Question';

const Quest = () => {
  const navigation = useNavigation();

  const {questionsAnswered} = useSelector(state => state.questions);

  const dispatch = useDispatch();

  const handleAnswerQuestion = () => dispatch(answerQuestion());

  return (
    <Container>
      <QuestionCount />
      <Question />
      <ButtonsContainer>
        <QuitButton>
          <QuitButtonLabel>{'Quit Quiz'}</QuitButtonLabel>
        </QuitButton>
        <NextButton onPress={handleAnswerQuestion}>
          <NextButtonLabel>{'Next'}</NextButtonLabel>
        </NextButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Quest;
