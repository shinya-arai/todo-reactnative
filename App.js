import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { TodoComponent } from './src/components/TodoComponent';
import { TodoDetail } from './src/components/TodoDetail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: TodoComponent,
    Detail: TodoDetail,
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)