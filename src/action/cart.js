import {ADD_ITEM, REMOVE_ITEM, SET_QUANTITY, CLEAR_ITEMS} from './types';
import {createAction} from 'redux-actions';

export const add = createAction(ADD_ITEM);
export const remove = createAction(REMOVE_ITEM);
export const setQuantity = createAction(SET_QUANTITY);
export const clear = createAction(CLEAR_ITEMS);
