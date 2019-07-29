import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text  } from 'native-base';

import { TodoList } from './TodoList';

export class TodoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], text: '' };
  }

  addTodo = () => {
    const { text } = this.state;
    if (text.length) {
      const todos = this.state.todos.concat({ content: text, isDone: false });
      this.setState({ todos, text: '' });
    } else {
      Alert.alert('no text')
    }
  }

  doneTodo = (item, index) => {
    item.isDone = !item.isDone;
    const todos = this.state.todos.map((todo, i) => i === index ? item : todo)

    this.setState({ todos })
  }

  deleteTodo = index => {
    const todos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({ todos })
  }

  updateTodo = (index, text) => {
    const { todos } = this.state;
    const targetTodo = todos.find((todo, i) => i === index);
    targetTodo.content = text;
    const updateTodos = todos.map((todo, i) => i === index ? targetTodo : todo)

    this.setState({ todos: updateTodos });
    this.props.navigation.navigate('Home')
  }

  render() {
    const { text, todos } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input 
                onChangeText={text => this.setState({ text })}
                value={text}
              />
            </Item>
          </Form>
          <Content style={{ marginTop: 20 }}>
            <Button 
              primary
              onPress={this.addTodo}
            >
              <Text>Add</Text>
            </Button>
          </Content>
          <Content style={{ marginTop: 20 }}>
            <TodoList 
              todos={todos}
              doneTodo={this.doneTodo} 
              deleteTodo={this.deleteTodo}
              updateTodo={this.updateTodo}
              navigation={navigation}
            />
          </Content>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  // addButton: {
  //   marginTop: 20,
  // }
})
