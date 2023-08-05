import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { chengTodo, deleteTodo } from 'redux/todosSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const [newText, setNewText] = useState(text);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteTodo(id));
  };

  // const onFocusInput = ev => {
  //   ev.target.value = text;
  // };

  const onChangeText = ev => {
    setNewText(ev.target.value);
  };

  const buttonText = () => {
    const newTodo = {
      text: newText,
      id,
    };
    dispatch(chengTodo(newTodo));
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={onClick}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <input
          type="text"
          onChange={onChangeText}
          value={newText}
          // onFocus={onFocusInput}
        />
        <button type="button" onClick={buttonText}>
          TodoText
        </button>
      </TodoWrapper>
    </>
  );
};
