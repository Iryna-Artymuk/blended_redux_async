import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    chengTodo: (state, { payload }) => {
      // const index = state.todos.findIndex(todo => todo.id === payload.id);
      // state.todos[index] = { ...state.todos[index], text: payload.text };
      // state.todos[index].text = payload.text;
      state.todos = state.todos.map(todo =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, chengTodo } = todosSlice.actions;
export default todosSlice.reducer;
