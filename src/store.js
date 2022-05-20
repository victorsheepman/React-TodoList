import { createStore } from 'redux'
import {todoApp} from './reducers/todoApp'
export let store = createStore(todoApp)