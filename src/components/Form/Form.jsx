import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/actions';
import './Form.css'
export const Form = () => {
    const dispatch = useDispatch();
    let newTodo='';
    const onSearchValueChange = (e) => {
        e.preventDefault();
        newTodo =  e.target.value
    }
    const handleLogin = (e) =>{
        // eslint-disable-next-line no-unused-expressions
        e.preventDefault();
        dispatch(addTodo(newTodo) );
        e.target[0].value = ''
    }
  return( 
        <form className='form' onSubmit={handleLogin}>
            <input 
                type="text" 
                name="form" 
                placeholder='add details'
                onChange={onSearchValueChange}
            />
            <button type='submit'>Add</button>
        </form>
    );
};
