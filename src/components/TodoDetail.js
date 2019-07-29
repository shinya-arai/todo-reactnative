import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Input, Button, Text} from 'native-base';

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
      <Container>
        <Content>
          <Text>TodoDetail</Text>
          <Input 
            placeholder="Input Todo"
            value={text}
            onChangeText={text => this.setState({ text })}
          />
          <Button style={styles.button} onPress={this.updateTodo}>
            <Text>Update Todo</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30
  }
})