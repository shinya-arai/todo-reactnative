import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export class TodoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: null, text: '' };
  }

  componentWillMount() {
    const item = this.props.navigation.getParam('item');
    const index = this.props.navigation.getParam('index');
    this.setState({ index, text: item.content })
  }

  updateTodo = () => {
    const { index, text } = this.state;
    const updateTodo = this.props.navigation.getParam('updateTodo');
    updateTodo(index, text);
  }

  render() {
    const { text } = this.state;

    return (
      <View>
        <Text>TodoDetail</Text>
        <TextInput 
          placeholder="Input Todo!!"
          value={text}
          onChangeText={text => this.setState({ text })}
        />
        <Button 
          onPress={this.updateTodo}
          title="Update Todo"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 30
  }
})