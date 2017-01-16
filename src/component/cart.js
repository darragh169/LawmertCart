import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';

import {clear, setQuantity} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import Icon from './Icon';
import Table from './table';
import { formatPrice } from '../utilities';


import styles from './styles.css';

const Item = connect(
  () => ({}),
  {setQuantity}
)(({id, quantity, setQuantity}) => {
  const {title, price} = products[id];
  const inc = () => setQuantity({id, quantity: quantity + 1});
  const dec = () => setQuantity({id, quantity: quantity - 1});
  return (
    <tr>
      <td>
        {title}
        <Icon name="fa-trash-o" size="fa-1x"></Icon>
      </td>
      <td>
        { formatPrice(price)}
      </td>
      <td>
        {quantity}
        <a onClick={inc}><Icon name="fa-plus"></Icon></a> <a onClick={dec}><Icon name="fa-minus"></Icon></a>
      </td>
      <td>
        { formatPrice(price * quantity)}
      </td>
      <td></td>
    </tr>
  );
});

const TableModel = {
    headers: ["Product","Price","Quantity","Total"]
}

const Cart = ({total, items}) => (
    <div>
      <Heading><Icon name="fa-shopping-cart" size="fa-1x"></Icon>Cart</Heading>
      
      <a className={styles.button} onClick={clear}>Clear all items</a>
      
      {/*<Table model={ TableModel } data={ items }></Table>*/}

      <table className={styles.productsTable}>
        <thead>
          <tr>
            <th width="25%">Product</th>
            <th width="20%">Price</th>
            <th width="20%">Quantity</th>
            <th width="20%">Total</th>
            <th width="15%"></th>
          </tr>
        </thead>
        <tbody>
          {map((item) => <Item key={item.id} {...item}/>, items)}
          <tr><td colSpan={4}/><td>{ formatPrice(total) }</td></tr>
        </tbody>
      </table>
    </div>
);

export default connect((state) => {
  return {
    items: state.cart.items,
    total: reduce(
      (sum, {id, quantity}) => sum + products[id].price * quantity,
      0,
      state.cart.items
    ),
  };
})(Cart);
