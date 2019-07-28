import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { TodoComponent } from './src/components/TodoComponent';
import { TodoDetail } from './src/components/TodoDetail';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    const { navigation } = this.props;

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <TodoComponent
        navigation={navigation}
      />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Detail: TodoDetail
  },
  {
    initialRouteName: 'Home',
    // defaultNavigationOptions: () => ({
    //   header: null
    // })
  }
)

export default createAppContainer(AppNavigator)