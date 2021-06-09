import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  CategoryLabel,
  CurrentQuestionNumber,
  QuestionContainer,
  TotalQuestions,
  DotsContainer,
  Dot,
  QuitButton,
  ButtonsContainer,
  QuitButtonLabel,
  NextButton,
  NextButtonLabel,
} from './styles';
import Status from './Status';
import Question from './Question';

const Quest = () => {
  const navigation = useNavigation();

  // const goToDashboard = () => navigation.navigate('Dashboard');

  return (
    <Container>
      <Header>
        <CategoryLabel>{'Mahtematics Quiz'}</CategoryLabel>
        <QuestionContainer>
          <CurrentQuestionNumber>{'Question 06'}</CurrentQuestionNumber>
          <TotalQuestions>{'/10'}</TotalQuestions>
        </QuestionContainer>
        <DotsContainer>
          {[...Array(10).keys()].map(number => (
            <Dot status={Status.WRONG} />
          ))}
        </DotsContainer>
      </Header>
      <Question />
      <ButtonsContainer>
        <QuitButton>
          <QuitButtonLabel>{'Quit Quiz'}</QuitButtonLabel>
        </QuitButton>
        <NextButton>
          <NextButtonLabel>{'Next'}</NextButtonLabel>
        </NextButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Quest;
