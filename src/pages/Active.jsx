import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { TodoList } from '../containers/TodoList/TodoList';

export const Active = () => {
    const {todos, activeIds} = useSelector(state => state)
  return (
    <>
        <Header />
        <Form />
        <TodoList todos={todos} ids={activeIds} />
    </>
  );
};
