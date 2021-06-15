import styled from 'styled-components';

import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

export const QuestionDescription = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 20px;
  color: #c8cbcd;
  margin-top: 24px;
`;
