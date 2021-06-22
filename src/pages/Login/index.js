import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {login} from '../../store/ducks/user';

import {
  Container,
  Header,
  LogoTitle,
  WelcomeSubTitle,
  InputsContainer,
  NameInput,
  EnterButton,
  EnterButtonLabel,
} from './styles';

const Login = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(name));
  };

  return (
    <Container>
      <Header>
        <LogoTitle>{`Welcome Back!`}</LogoTitle>
        <WelcomeSubTitle>Please insert in to your name</WelcomeSubTitle>
      </Header>
      <InputsContainer>
        <NameInput onChangeText={text => setName(text)} />
      </InputsContainer>
      <EnterButton onPress={handleLogin}>
        <EnterButtonLabel>Enter</EnterButtonLabel>
      </EnterButton>
    </Container>
  );
};

export default Login;
