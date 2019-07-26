import React from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

import { TodoList } from './TodoList';

export class TodoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], text: '' };
  }

  addTodo = () => {
    const todos = this.state.todos.concat({ content: text, isDone: false });
    this.setState({ todos, text: '' });
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

  render() {
    const { text, todos } = this.state;
    return (
      <View>
        <TextInput 
          placeholder="Input Todo!!"
          onChangeText={text => this.setState({ text })}
          value={text}
        />
        <Button onPress={this.addTodo} title="Add" />
        <TodoList todos={todos} doneTodo={this.doneTodo} deleteTodo={this.deleteTodo} />
      </View>
    )
  }
}
