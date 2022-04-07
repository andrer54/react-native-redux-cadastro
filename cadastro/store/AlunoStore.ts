import {createStore} from 'redux';
 import {reducer} from '../reducer/AlunoReducer';
 
 export const store = createStore(reducer);