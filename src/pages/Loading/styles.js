import styled from 'styled-components';
import {ActivityIndicator} from 'react-native';

export const Container = styled.View`
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
