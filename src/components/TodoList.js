import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Button } from 'native-base';

export class TodoList extends React.Component {

  goDetail = (item, index) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', {
      item,
      index,
      updateTodo: this.props.updateTodo
    });
  }

  render() {
    const { todos, doneTodo, deleteTodo } = this.props;

    return (
      <Container>
        <Content>
          <FlatList 
            data={todos}
            renderItem={({item, index}) => 
              <ListItem key={index}>
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