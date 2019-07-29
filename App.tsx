import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { 
  createStackNavigator, 
  createAppContainer,
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { TodoComponent } from './src/components/TodoComponent';
import { TodoDetail } from './src/components/TodoDetail';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
  isReady: boolean;
}


class App extends React.Component<Props, State> {
  constructor(props: Props) {
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
