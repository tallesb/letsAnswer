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
  AllCategoriesButton,
  AllCategoriesButtonLabel,
} from './styles';

const Dashboard = () => (
  <Container>
    <TopContainer>
      <Avatar />
      <Greetings>{'Hi, Talles'}</Greetings>
    </TopContainer>
    <CategoriesContainer>
      <CategoriesLabelRow>
        <CategoriesLabel>{'Categorias'}</CategoriesLabel>
        <AllCategoriesButton>
          <AllCategoriesButtonLabel>{'VER TODAS'}</AllCategoriesButtonLabel>
        </AllCategoriesButton>
      </CategoriesLabelRow>
      <CategoriesList />
    </CategoriesContainer>
  </Container>
);

export default Dashboard;
