import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductPage from './containers/ProductPage/ProductPage';
import Home from './containers/Home/Home.jsx'
import Spinner from './components/Spinner/Spinner';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCTS } from './graphql/Queries';
export class App extends Component {
  render() {
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
                    <Route path="/product/:id" exact render={() => <ProductPage products={data?.category?.products} />} />
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

export default App;
