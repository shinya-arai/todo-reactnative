import React from 'react';
import { View, Text } from 'react-native';

export const Sample = (props) => {
  const { navigation } = props;
  const text = navigation.getParam('text');

  return (
    <View>
      <Text>SampleSampleSample</Text>
      <Text>text: {text}</Text>
    </View>
  );
}