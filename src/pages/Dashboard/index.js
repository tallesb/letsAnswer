import React from 'react';

import CategoriesList from './components/CategoriesList';

import {
  Container,
  Avatar,
  TopContainer,
  Greetings,
  CategoriesContainer,
  CategoriesLabel,
  CategoriesLabelRow,
} from './styles';

const Dashboard = () => (
  <Container>
    <TopContainer>
      <Avatar />
      <Greetings>{'Hi Talles'}</Greetings>
    </TopContainer>
    <CategoriesContainer>
      <CategoriesLabelRow>
        <CategoriesLabel>{'Categories'}</CategoriesLabel>
      </CategoriesLabelRow>
      <CategoriesList />
    </CategoriesContainer>
  </Container>
);

export default Dashboard;
