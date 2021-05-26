import React from 'react';

import {Container, CategoryLabel, CategoryIcon, List} from './styles';

const CategoriesList = () => {
  const categoriesExample = [
    {
      id: 0,
      label: 'História',
      icon: 'earth',
      idApi: 23,
    },
    {
      id: 1,
      label: 'Geografia',
      icon: 'compass',
    },
    {
      id: 2,
      label: 'Mitologia',
      icon: 'chess-rook',
    },
    {
      id: 3,
      label: 'Esportes',
      icon: 'basketball',
    },
    {
      id: 4,
      label: 'Política',
      icon: 'scale-balance',
    },
    {
      id: 5,
      label: 'Conhecimentos gerais',
      icon: 'book-open-page-variant',
    },
    {
      id: 6,
      label: 'Matemática',
      icon: 'math-compass',
    },
    {
      id: 7,
      label: 'Ciência',
      icon: 'react',
    },
    {
      id: 8,
      label: 'Filmes',
      icon: 'movie-roll',
    },
  ];

  const renderCard = ({item}) => (
    <Container>
      <CategoryIcon name={item.icon} />
      <CategoryLabel>{item.label}</CategoryLabel>
    </Container>
  );

  return (
    <List
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={renderCard}
      data={categoriesExample}
      keyExtractor={category => category.id}
      numColumns={3}
    />
  );
};

export default CategoriesList;
