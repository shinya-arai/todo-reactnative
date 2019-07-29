import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text  } from 'native-base';
import {
  NavigationState,
  NavigationParams,
  NavigationScreenProp
} from 'react-navigation';

import { TodoList } from './TodoList';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

type Todo = {
  content: string,
  isDone: boolean,
}

interface State {
  todos: Todo[];
  text: string;
}

export class TodoComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { todos: [], text: '' };
  }

  private addTodo = (): void => {
    const { text } = this.state;
    
    if (text.length) {
      const todos = this.state.todos.concat({ content: text, isDone: false });
      this.setState({ todos, text: '' });
    } else {
      Alert.alert('no text')
    }
  }

  private doneTodo = (item: Todo, index: number): void => {
    item.isDone = !item.isDone;
    const todos = this.state.todos.map((todo, i) => i === index ? item : todo)

    this.setState({ todos })
  }

  private deleteTodo = (index: number): void => {
    const todos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({ todos })
  }

  private updateTodo = (index: number, text: string): void => {
    const { todos } = this.state;
    const targetTodo = todos.find((todo: Todo, i: number) => i === index);
    targetTodo.content = text;
    const updateTodos = todos.map((todo, i) => i === index ? targetTodo : todo)

    this.setState({ todos: updateTodos });
    this.props.navigation.navigate('Home')
  }

  public render() {
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
