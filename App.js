import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { TodoComponent } from './src/components/TodoComponent';
import { Sample } from './src/components/Sample';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <TodoComponent />
//     </View>
//   );
// }

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
    Details: Sample
  },
  // {
  //   initialRouteName: Home
  // }
)

export default createAppContainer(AppNavigator)