import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectOption} from '../../../store/ducks/question';

import {
  Container,
  OptionContainer,
  OptionDescription,
  OptionRadio,
  OptionDescriptionContainer,
  OptionRadioContainer,
} from './styles';

const QuestionsRadio = ({question}) => {
  const {options} = question;

  const {selectedOption} = useSelector(state => state.question);

  const dispatch = useDispatch();

  return (
    <Container>
      {options.map((option, index) => {
        const selected = index === selectedOption;

        return (
          <OptionContainer
            key={index}
            selected={selected}
            onPress={() => dispatch(selectOption(index))}>
            <OptionDescriptionContainer>
              <OptionDescription selected={selected}>
                {option}
              </OptionDescription>
            </OptionDescriptionContainer>
            <OptionRadioContainer>
              <OptionRadio selected={selected} />
            </OptionRadioContainer>
          </OptionContainer>
        );
      })}
    </Container>
  );
};

export default QuestionsRadio;
