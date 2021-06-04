import React, { Component } from 'react';
import CardPage from '../../components/CardPage/CardPage';
import { withRouter } from 'react-router-dom';

export class ProductPage extends Component {
  render() {
    const { products,location, history,match } = this.props;
    const {id} = match.params
    const product = products.find(product => product.name === id)
    console.log(product) 
    return <CardPage product={product} />;
  }
}

export default withRouter(ProductPage);
