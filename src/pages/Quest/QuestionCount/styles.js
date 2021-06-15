import styled from 'styled-components';
import {SafeAreaView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import Status from '../../../constants/StatusQuestion';

export const Container = styled.View`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const CategoryLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 18px;
  color: #727793;
`;

export const CurrentQuestionNumber = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 26px;
  color: #c8cbcd;
`;

export const TotalQuestions = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 24px;
  color: #727793;
`;

export const QuestionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const DotsContainer = styled.View`
  width: 100%;
  margin-top: 12px;
  flex-direction: row;
`;

export const Dot = styled.View`
  width: 8%;
  height: 2px;
  background: ${({status}) => {
    switch (status) {
      case Status.CORRECT:
        return '#1D8F7C';
      case Status.WRONG:
        return '#951C49';
      case Status.CURRENT:
        return '#BBBEC5';
      default:
        return '#727793';
    }
  }};
  margin-right: 2%;
`;
