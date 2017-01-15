import {createElement} from 'react';
import Product from './product';
import * as products from '../data/items';
import Heading from './heading';
import Icon from './icon'

export default () => (
  <div>
    <Heading><Icon name="fa-coffee" size="fa-2x"></Icon>Products</Heading>
    <Product {...products.cake}/>
    <Product {...products.waffle}/>
    <Product {...products.chocolate}/>
  </div>
);
