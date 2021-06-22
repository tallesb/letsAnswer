import React from 'react';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  QuizzResultLabel,
  QuantQuestions,
  Score,
  ScoreContainer,
  YourScoreLabel,
  QuizzResult,
  QuizzResultDescription,
  QuizzContainer,
  RateContainer,
  RateImage,
  Avatar,
  CloseButton,
  CloseIcon,
} from './styles';

const Results = () => {
  const {corrects} = useSelector(state => state.quizz);
  const {name} = useSelector(state => state.user);

  const navigation = useNavigation();

  const correctQuestions = corrects.length;

  let quizzResultTitle = null;
  let quizzResultSubtitle = null;
  let rateColor = null;

  if (correctQuestions <= 5) {
    quizzResultTitle = 'My bad...';
    quizzResultSubtitle =
      'It was not an easy challenge. Lets try to improve next time.';
    rateColor = '#AD8A56';
  } else if (correctQuestions <= 8) {
    quizzResultTitle = 'Good!';
    quizzResultSubtitle =
      'Despite some mistakes, you mastered this quizz well!';
    rateColor = '#D7D7D7';
  } else {
    quizzResultTitle = 'Congratulations!!!';
    quizzResultSubtitle =
      'This quizz was a piece of cake huh? Lets go for another challenge?';

    rateColor = '#C9B037';
  }

  const handleCloseResults = () => navigation.popToTop();

  return (
    <Container>
      <QuizzContainer>
        <QuizzResultLabel>Quizz Results</QuizzResultLabel>
        <RateContainer>
          <RateImage style={{tintColor: rateColor}} />
          <Avatar
            source={{
              uri: `https://api.multiavatar.com/${name}.png`,
              priority: FastImage.priority.normal,
            }}
          />
        </RateContainer>
        <QuizzResult>{quizzResultTitle}</QuizzResult>
        <QuizzResultDescription>{quizzResultSubtitle}</QuizzResultDescription>
        <YourScoreLabel>YOUR SCORE</YourScoreLabel>
        <ScoreContainer>
          <Score
            correctQuestions={correctQuestions}>{`${correctQuestions} `}</Score>
          <QuantQuestions>/ 10</QuantQuestions>
        </ScoreContainer>
        <CloseButton onPress={handleCloseResults}>
          <CloseIcon />
        </CloseButton>
      </QuizzContainer>
    </Container>
  );
};

export default Results;
