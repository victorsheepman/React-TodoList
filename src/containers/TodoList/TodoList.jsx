import React from 'react';
import {Todo } from '../../components/Todo/Todo'
import { useSelector } from 'react-redux';
import './TodoList.css'
export const TodoList = ({todos, ids}) => {
    if (ids.length == 0) {
      return (
        <div className='TodoList'>
          <h1>No hay Todos</h1>
        </div>
      )
    }else{
      return (  
        <div className='TodoList'>
          {
            ids.map(item=><Todo id={item} text={todos[item].content} active={todos[item].completed} />)
          }
        </div>
      );
    }
 
};
