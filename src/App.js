import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductPage from './containers/ProductPage/ProductPage';
import Home from './containers/Home/Home.jsx';
import Tech from './containers/Tech/Tech';
import clothes, { Clothes } from './containers/Clothes/Clothes';
import Spinner from './components/Spinner/Spinner';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCTS } from './graphql/Queries';
import { connect } from 'react-redux';
export class App extends Component {
  filterData = (data, filter) => {
    return data?.filter((item) => item.category === filter);
  };

  render() {
    const {currency} = this.props
    return (
      <Layout>
        <Switch>
          <Query query={GET_PRODUCTS}>
            {({ data, loading }) => (
              <>
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <Route
                      path="/"
                      exact
                      render={() => (
                        <Home products={data?.category?.products} />
                      )}
                    />
                    <Route
                      path="/clothes"
                      exact
                      render={() => (
                        <Clothes
                          currency={currency}
                          products={this.filterData(
                            data?.category?.products,
                            'clothes'
                          )}
                        />
                      )}
                    />
                    <Route
                      path="/tech"
                      exact
                      render={() => (
                        <Tech
                          products={this.filterData(
                            data?.category?.products,
                            'tech'
                          )}
                        />
                      )}
                    />

                    <Route
                      path="/product/:id"
                      exact
                      render={() => (
                        <ProductPage products={data?.category?.products} />
                      )}
                    />
                  </>
                )}
              </>
            )}
          </Query>
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency?.currency,
});

export default connect(mapStateToProps)(App);
