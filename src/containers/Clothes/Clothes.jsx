import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCTS_BY_CATEGORY } from '../../graphql/Queries';
import Spinner from '../../components/Spinner/Spinner';

export class Clothes extends Component {
  render() {
    const { currency, symbol } = this.props;
    return (
      <CardList title='Clothes'>
        <Query
          query={GET_PRODUCTS_BY_CATEGORY}
          variables={{
            category: 'clothes',
          }}
        >
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

export default connect(mapStateToProps)(Clothes);
