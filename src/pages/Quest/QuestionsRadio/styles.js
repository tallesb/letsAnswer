import styled from 'styled-components';

import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const OptionContainer = styled.TouchableOpacity`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 11px;
  padding-top: 11px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 12px;
  border-width: 1.5px;
  border-color: ${({selected}) => (selected ? '#05C99B' : '#c8cbcd')};
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const OptionDescriptionContainer = styled.View`
  flex: 9;
`;

export const OptionRadioContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const OptionDescription = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 500;
  font-size: 18px;
  color: ${({selected}) => (selected ? '#05C99B' : '#c8cbcd')};
`;

export const OptionRadio = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: ${({selected}) => (selected ? '#05C99B' : '#c8cbcd')};
  background: ${({selected}) => (selected ? '#05C99B' : 'transparent')};
`;
