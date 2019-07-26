import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TodoComponent } from './src/components/TodoComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});