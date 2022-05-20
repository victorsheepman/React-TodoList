/*
 * tipos de acciones
 */


export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const ADD_TODOLIST = 'ADD_TODOLIST'
export const DELETE_ALL = 'DELETE_ALL'
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
      id: nextTodoId ++,
      content
    }
});

export const completeTodo = id =>({
  type: COMPLETE_TODO,  
  payload:{
    id: {id}
  }
})
export const deleteAll = ()=>({
  type:DELETE_ALL,
  payload:0
})