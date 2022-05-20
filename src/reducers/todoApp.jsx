import { ADD_TODO, COMPLETE_TODO, DELETE_ALL } from "../actions/actions";

const initialState = {
    allIds:[],
    todos:{},
    completedIds:[],
    activeIds:[]
}
  
export const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            state.activeIds.push(action.payload.id)
        return {
            ...state,
            allIds:[...state.allIds, action.payload.id],
            todos: {
                ...state.todos,
                [action.payload.id]:{
                    content:action.payload.content,
                    completed:false
                } 
            }

        }
        case COMPLETE_TODO:
            const {id} = action.payload.id;
            const aux = state.completedIds.some(item=>item=== id);
            if (aux) {
                state.completedIds = state.completedIds.filter(i => i!== id);
                state.activeIds.push(id)
            }else{ 
                state.activeIds= state.activeIds.filter(i => i!== id);
                state.completedIds.push(id)
            }
            return {
                ...state,
                todos:{
                    ...state.todos,
                    [id]: {
                        ...state.todos[id],
                        completed:!state.todos[id].completed
                    }
                    
                }
            }
        case DELETE_ALL:
            let claves = Object.keys(state.todos); 
            let cleanTodo=state.todos;
            let ids = state.allIds;
            for(let i=0; i< claves.length; i++){
                let clave = claves[i];
                if(state.completedIds.some(i=>i==clave)){
                    delete cleanTodo[clave];
                    delete ids[clave];
                }
                
            }
            return{
               ...state,
               completedIds:state.completedIds = [],
               todos: cleanTodo
            }
        
      default:
            return state
    }
}
