import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';
import { Query } from '@apollo/client/react/components';
import { GET_ALL_PRODUCTS } from '../../graphql/Queries';
import Spinner from '../../components/Spinner/Spinner';

export class Home extends Component {
  render() {
    const { currency, symbol } = this.props;
    return (
      <CardList title='All Categories'>
        <Query query={GET_ALL_PRODUCTS}>
          {({ loading, data }) =>
            loading ? (
            <Spinner />
            ) : (
              data?.category?.products?.map((product) => (
                <Card
                  product={product}
                  key={product.name}
                  id={product.name}
                  title={product.name}
                  img={product.gallery[0]}
                  price={getCurrentPrice(product.prices, currency)}
                  curr={symbol}
                  disabled={!product.inStock}
                />
              ))
            )
          }
        </Query>
      </CardList>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency?.currency,
  symbol: state.currency.symbol,
});

export default connect(mapStateToProps)(Home);
