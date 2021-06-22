import styled from 'styled-components';
import {SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Fonts from '../../styles/fonts';

import Gold from '../../assets/images/gold.png';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #1e2545;
  justify-content: center;
`;

export const RateContainer = styled.View`
  width: 200px;
  justify-content: center;
  align-items: center;
`;

export const RateImage = styled.Image.attrs({
  source: Gold,
  resizeMode: 'contain',
})`
  width: 200px;
  height: 200px;
`;

export const Avatar = styled(FastImage)`
  width: 100px;
  height: 100px;
  position: absolute;
  t
`;

export const QuizzContainer = styled.View`
  align-items: center;
  padding: 16px;
`;

export const QuizzResultLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 22px;
  color: white;
`;

export const QuizzResult = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 22px;
  color: white;
  margin-bottom: 8px;
`;

export const QuizzResultDescription = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 18px;
  color: #c8cbcd;
  text-align: center;
  margin-bottom: 70px;
`;

export const YourScoreLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 16px;
  color: #c8cbcd;
  margin-bottom: 2px;
`;

export const ScoreContainer = styled.View`
  flex-direction: row;
  margin-bottom: 48px;
`;

export const Score = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 42px;
  color: ${({correctQuestions}) =>
    correctQuestions <= 5
      ? '#D83A56'
      : correctQuestions <= 8
      ? '#77ACF1'
      : '#05C99B'};
`;

export const QuantQuestions = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 42px;
  color: white;
`;

export const CloseButton = styled.TouchableOpacity`
  border-width: 2px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-color: white;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(MaterialCommunityIcons).attrs({
  size: 30,
  name: 'close',
  color: 'white',
})``;
