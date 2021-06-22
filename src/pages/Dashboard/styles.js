import FastImage from 'react-native-fast-image';

import styled from 'styled-components';
import Fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background: #e9f0f3;
`;

export const TopContainer = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 56px;
  background: #060814;
  padding-bottom: 50px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const Greetings = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 32px;
  margin-top: 32px;
  color: white;
`;

export const CategoriesContainer = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 28px;
`;

export const CategoriesLabelRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const CategoriesLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 24px;
  font-weight: bold;
  color: #060814;
`;

export const AllCategoriesButton = styled.TouchableOpacity`
  background: #b4c7d1;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const AllCategoriesButtonLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 12px;
  font-weight: bold;
  color: #555e67;
`;
