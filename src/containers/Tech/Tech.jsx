import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';

export class Tech extends Component {
  render() {
    const { products, currency } = this.props;
    return (
      <CardList>
        {console.log(products)}
        {products.map((product) => (
          <Card
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

export default connect(mapStateToProps)(Tech);
