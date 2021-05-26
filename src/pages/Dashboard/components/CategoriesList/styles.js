import styled from 'styled-components';
import {FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../../styles/fonts';
import Colors from '../../../../styles/colors';

// MaterialCommunityIcons.loadFont();

export const Container = styled.TouchableOpacity`
  flex-grow: 1;
  background: white;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  height: 130px
  width: 100px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const List = styled(FlatList)``;

export const CategoryLabel = styled.Text`
  font-family: ${Fonts.heading};
  font-weight: 600;
  font-size: 14px;
  color: #060814;
  text-align: center;
  margin-top: 24px;
`;

export const CategoryIcon = styled(MaterialCommunityIcons).attrs({
  size: 40,
  color: 'black',
})``;
