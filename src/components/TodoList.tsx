import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Button } from 'native-base';
import { 
  NavigationState,
  NavigationParams,
  NavigationScreenProp
} from 'react-navigation';

import { TodoComponent } from './TodoComponent';

type Todo = TodoComponent['context'];

interface Props {
  todos: Todo[],
  doneTodo: (item: Todo, index: number) => void,
  deleteTodo: (index: number) => void,
  navigation: TodoComponent['context']
}

export class TodoList extends React.Component<Props, {}> {

  private goDetail = (item: Todo, index: number) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', {
      item,
      index,
      updateTodo: this.props.updateTodo
    });
  }

  public render() {
    const { todos, doneTodo, deleteTodo } = this.props;

    return (
      <Container>
        <Content>
          <FlatList 
            data={todos}
            renderItem={({item, index}) => 
              <ListItem key={index} >
                <Text 
                  onPress={() => doneTodo(item, index)}
                  style={item.isDone && styles.doneTodo}
                >
                  {item.content}
                </Text>
                <Button onPress={() => deleteTodo(index)}>
                  <Text>delete</Text>
                </Button>
                <Button onPress={() => this.goDetail(item, index)}>
                  <Text>go to detail</Text>
                </Button>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  doneTodo: {
    color: 'red'
  }
});
