import {handleActions} from 'redux-actions';
import {CLEAR_ITEMS, ADD_ITEM, SET_QUANTITY} from 'action/types';
import map from 'lodash/fp/map';

const itemExists = (id, items) => { return items.find(function(item){ return item.id === id;  }) }

export default handleActions({
  [CLEAR_ITEMS]: () => ({
    items: [],
  }),
  [ADD_ITEM]: (state, {payload: id}) => ({
    items: itemExists(id, state.items) ? state.items :  [...state.items, {id, quantity: 1}],
  }),
  [SET_QUANTITY]: (state, {payload: {id: target, quantity}}) => ({
    ...state,
    items: map(({id, ...rest}) => (
      target === id ? {id, ...rest, quantity} : {id, ...rest}
    ), state.items),
  }),
}, {
  items: [],
});
