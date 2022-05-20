import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { completeTodo } from '../../actions/actions';
import './Todo.css'
export const Todo = ({text, active, id}) => {
    const dispatch = useDispatch(); 
    const handleCompleted = (e) =>{
        dispatch(completeTodo(id))
    }

  return (
      <div className='Todo'>
          <button className={active ? 'Todo__button--active' : 'Todo__button'} onClick={handleCompleted}></button>
          <p className={active ? 'Todo__p--active' : 'Todo__p'}>{text}</p>
      </div>
  );
};
