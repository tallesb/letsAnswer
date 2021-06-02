import React from 'react';
import {useDispatch} from 'react-redux';

import categories from './categories';
import {selectCategory} from '../../../../store/ducks/categories';

import {Container, CategoryLabel, CategoryIcon, List} from './styles';

const CategoriesList = () => {
  const dispatch = useDispatch();

  const getQuestions = categoryId => {
    dispatch(selectCategory(categoryId));
  };

  const renderCard = ({item}) => (
    <Container onPress={() => getQuestions(item.id)}>
      <CategoryIcon name={item.icon} />
      <CategoryLabel>{item.label}</CategoryLabel>
    </Container>
  );

  return (
    <List
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={renderCard}
      data={categories}
      keyExtractor={category => category.id}
      numColumns={3}
    />
  );
};

export default CategoriesList;
