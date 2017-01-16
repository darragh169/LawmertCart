import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';

import {clear, remove , setQuantity} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import Item from './item'
import Icon from './Icon';
import { formatPrice } from '../utilities';

import styles from './styles.css';

const Cart = ({total, items, clear}) => (
    <div>
      
      <Heading><Icon name="fa-shopping-cart" size="fa-1x"></Icon>Cart</Heading>
      
      { items.length > 0 ?
        <div>
          <a className={styles.button} onClick={clear}>Clear all items</a>
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
              <tr><td colSpan={4}/><td className={styles.tableTotal} >{ formatPrice(total) }</td></tr>
            </tbody>
          </table>
        </div>
      : 
      <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
      </div>
      }

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
},{clear})(Cart);
