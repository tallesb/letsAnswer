import styled from 'styled-components';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Status from './Status';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #1e2545;
`;

export const Header = styled.View`
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

export const ButtonsContainer = styled.View`
  width: 100%
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 32px;
`;

export const QuitButton = styled.TouchableOpacity`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 48px;
  padding-right: 48px;
  border-width: 0px;
  justify-content: center;
  align-items: center;
`;

export const QuitButtonLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 18px;
  color: #c8cbcd;
`;

export const NextButtonLabel = styled(QuitButtonLabel)`
  color: white;
`;

export const NextButton = styled(QuitButton).attrs(({enabled}) => ({
  disabled: !enabled,
}))`
  background: ${({enabled}) => (enabled ? '#09d3f6' : '#c8cbcd')};
  border-radius: 8px;
`;

export const QuitIcon = styled(MaterialCommunityIcons).attrs({
  size: 24,
  name: 'power-standby',
  color: '#c8cbcd',
})``;

export const Loading = styled.View`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.7;
  background: #1e2545;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#c8cbcd',
})``;
