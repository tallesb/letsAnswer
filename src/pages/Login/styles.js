import styled from 'styled-components';
import {SafeAreaView} from 'react-native';

import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #1e2545;
  justify-content: center;
`;

export const Header = styled.View`
  padding-top: 64px;
  padding-bottom: 50px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: center;
  align-items: center;
`;

export const LogoTitle = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 500;
  font-size: 34px;
  color: white;
`;

export const WelcomeSubTitle = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 500;
  font-size: 18px;
  color: #727793;
`;

export const InputsContainer = styled.View`
  padding-left: 34px;
  padding-right: 34px;
  align-items: center;
  margin-bottom: 36px;
`;

export const NameInput = styled.TextInput.attrs({
  placeholder: 'Name',
  placeholderTextColor: '#727793',
})`
  height: 54px;
  width: 100%;
  border-radius: 8px;
  border-width: 2px;
  border-color: #727793;
  padding: 12px;
  font-family: ${Fonts.heading};
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  color: white;
`;

export const EnterButton = styled.TouchableOpacity`
  height: 54px;
  background: white;
  justify-content: center;
  align-items: center;
  margin-left: 34px;
  margin-right: 34px;
  border-radius: 8px;
`;

export const EnterButtonLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 700;
  font-size: 22px;
  color: #1e2545;
`;
