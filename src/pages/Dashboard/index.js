import React from 'react';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

import CategoriesList from './components/CategoriesList';

import LoadingPage from '../Loading';

import {
  Container,
  TopContainer,
  Greetings,
  CategoriesContainer,
  CategoriesLabel,
  CategoriesLabelRow,
} from './styles';

const Dashboard = () => {
  const {name} = useSelector(state => state.user);
  const {loading} = useSelector(state => state.categories);

  return (
    <Container>
      <TopContainer>
        <FastImage
          style={{height: 50, width: 50, borderRadius: 25}}
          source={{
            uri: `https://api.multiavatar.com/${name}.png`,
            priority: FastImage.priority.normal,
          }}
        />
        <Greetings>{`Hi ${name}`}</Greetings>
      </TopContainer>
      <CategoriesContainer>
        <CategoriesLabelRow>
          <CategoriesLabel>{'Categories'}</CategoriesLabel>
        </CategoriesLabelRow>
        <CategoriesList />
      </CategoriesContainer>
      {loading && <LoadingPage />}
    </Container>
  );
};

export default Dashboard;
