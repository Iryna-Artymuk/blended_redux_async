import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from 'components';

import React from 'react';

export function App() {
  // або
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem('todos'));

  //   if (todos) {
  //     setTodos(todos);
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     todos: [],
//   };

//   componentDidMount() {
//     const todos = JSON.parse(localStorage.getItem('todos'));

//     if (todos) {
//       this.setState(() => ({ todos }));
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const { todos } = this.state;

//     if (prevState.todos !== todos) {
//       localStorage.setItem('todos', JSON.stringify(todos));
//     }
//   }

//   addTodo = text => {
//     const todo = {
//       id: nanoid(),
//       text,
//     };

//     setTodos(prev => [...prev, todo]);
//     // this.setState(({ todos }) => ({
//     //   todos: [...todos, todo],
//     // }));
//   };

//   handleSubmit = data => {
//     this.addTodo(data);
//   };

//   deleteTodo = id => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== id),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     return (
//       <>
//         <Header />
//         <Section>
//           <Container>
//             <SearchForm onSubmit={this.handleSubmit} />

//             {todos.length === 0 && (
//               <Text textAlign="center">There are no any todos ... </Text>
//             )}

//             <Grid>
//               {todos.length > 0 &&
//                 todos.map((todo, index) => (
//                   <GridItem key={todo.id}>
//                     <Todo
//                       id={todo.id}
//                       text={todo.text}
//                       counter={index + 1}
//                       onClick={this.deleteTodo}
//                     />
//                   </GridItem>
//                 ))}
//             </Grid>
//           </Container>
//         </Section>
//       </>
//     );
//   }
// }
