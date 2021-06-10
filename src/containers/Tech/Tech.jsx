import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';

export class Tech extends Component {
  render() {
    const { products, currency, symbol } = this.props;
    return (
      <CardList>
        {console.log(products)}
        {products.map((product) => (
          <Card
          product={product}
            key={product.name}
            id={product.name}
            title={product.name}
            img={product.gallery[0]}
            price={getCurrentPrice(product.prices, currency)}
            curr={symbol}
          />
        ))}
      </CardList>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency?.currency,
  symbol: state.currency.symbol
});

export default connect(mapStateToProps)(Tech);
