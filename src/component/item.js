import {createElement} from 'react';
import {connect} from 'react-redux';
import {clear, remove , setQuantity} from '../action/cart';
import * as products from '../data/items';
import Icon from './Icon';
import { formatPrice } from '../utilities';

const Item = connect(
  () => ({}),
  {setQuantity , remove}
)(({id, quantity, setQuantity, remove}) => {
  const {title, price} = products[id];
  const inc = () => setQuantity({id, quantity: quantity + 1});
  const dec = () => { quantity === 1 ? remove(id) : setQuantity({id, quantity: quantity - 1}) };
  return (
    <tr>
      <td>
        {title}
        <a onClick={() => remove(id)}><Icon name="fa-trash-o" size="fa-1x"></Icon></a>
      </td>
      <td>
        { formatPrice(price)}
      </td>
      <td>
        {quantity}
        <a onClick={ inc }><Icon name="fa-plus" size="fa-1x"></Icon></a> <a onClick={ dec }><Icon name="fa-minus" size="fa-1x"></Icon></a>
      </td>
      <td>
        { formatPrice(price * quantity)}
      </td>
      <td></td>
    </tr>
  );
});

export default connect(() => ({}), {setQuantity, remove})(Item);