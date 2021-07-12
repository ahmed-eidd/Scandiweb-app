import React, { Component } from 'react';
import CardPage from '../../components/CardPage/CardPage';
import { withRouter } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { GET_ALL_PRODUCTS } from '../../graphql/Queries';
import Spinner from '../../components/Spinner/Spinner';

export class ProductPage extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    const findProduct = (products) =>
      products.find((product) => product.name === id);
    return (
      <Query query={GET_ALL_PRODUCTS}>
        {({ loading, data }) =>
          loading ? (
            <Spinner />
          ) : (
            <CardPage product={findProduct(data?.category?.products)} />
          )
        }
      </Query>
    );
  }
}

export default withRouter(ProductPage);
