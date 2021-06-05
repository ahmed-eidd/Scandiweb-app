import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';

export class Clothes extends Component {
  render() {
    const { products, currency, test   } = this.props;
    return (
      <CardList>
        {console.log(this.props)}
        {products.map((product) => (
          <Card
          product={product}
            key={product.name}
            id={product.name}
            title={product.name}
            img={product.gallery[0]}
            price={getCurrentPrice(product.prices, currency)}
            curr={currency}
          />
        ))}
      </CardList>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency?.currency,
});

export default connect(mapStateToProps)(Clothes);
