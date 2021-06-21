import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './RootNavigation';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Quest from '../pages/Quest';
import Results from '../pages/Results';

const Stack = createStackNavigator();

const LoginRoute = () => (
  <Stack.Navigator headerMode="none" initialRouteName={'Login'}>
    <Stack.Screen name="LoginScreen" component={Login} />
  </Stack.Navigator>
);

const AppRoute = () => (
  <Stack.Navigator headerMode="none" initialRouteName={'Dashboard'}>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Quest" component={Quest} />
    <Stack.Screen name="Results" component={Results} />
  </Stack.Navigator>
);

const Route = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator headerMode="none" initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={LoginRoute} />
      <Stack.Screen name="AppRoute" component={AppRoute} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Route;
