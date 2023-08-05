import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';
import { Grid, GridItem, Text, Todo } from 'components';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  // console.log(todos);

  return (
    <Grid>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
};
