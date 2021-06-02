import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import { Container } from './styles';

const Quest = () => {
  const navigation = useNavigation();

  const goToDashboard = () => navigation.navigate('Dashboard');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={goToDashboard}
        style={{height: 100, width: 100, backgroundColor: 'blue'}}
      />
    </View>
  );
};

export default Quest;
