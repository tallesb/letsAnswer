import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {answerQuestion} from '../../store/ducks/quizz';

import {
  Container,
  QuitButton,
  ButtonsContainer,
  QuitButtonLabel,
  NextButton,
  NextButtonLabel,
  Loading,
  Indicator,
} from './styles';

import QuestionCount from './QuestionCount';
import Question from './Question';

const Quest = () => {
  const navigation = useNavigation();

  const {loading} = useSelector(state => state.quizz);
  const {selectedOption} = useSelector(state => state.question);

  const dispatch = useDispatch();

  const handleAnswerQuestion = () => dispatch(answerQuestion());

  return (
    <>
      <Container>
        <QuestionCount />
        <Question />
        <ButtonsContainer>
          <QuitButton>
            <QuitButtonLabel>{'Quit Quiz'}</QuitButtonLabel>
          </QuitButton>
          <NextButton
            onPress={handleAnswerQuestion}
            enabled={selectedOption !== null}>
            <NextButtonLabel>{'Next'}</NextButtonLabel>
          </NextButton>
        </ButtonsContainer>
      </Container>
      {loading && (
        <Loading>
          <Indicator />
        </Loading>
      )}
    </>
  );
};

export default Quest;
