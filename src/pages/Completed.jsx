import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteAll } from '../actions/actions';
import { Header } from '../components/Header/Header';
import { TodoList } from '../containers/TodoList/TodoList';

export const Completed = () => {
  const dispatch = useDispatch();
  const {todos,completedIds} = useSelector(state => state)
  const handleDelete = ()=>{
    dispatch(deleteAll());
  }
  return (
      <>
        <Header/>
        <TodoList todos={todos}  ids={completedIds} />
        <button className='delete' onClick={handleDelete}>delete all</button>
      </>
  );
};
