import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductPage from './containers/ProductPage/ProductPage';
import Home from './containers/Home/Home.jsx';
import Tech from './containers/Tech/Tech';
import Clothes from './containers/Clothes/Clothes';
import { connect } from 'react-redux';
import CartPage from './components/CartPage/CartPage';
export class App extends Component {
  filterData = (data, filter) => {
    return data?.filter((item) => item.category === filter);
  };

  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/clothes' exact component={Clothes} />
          <Route path='/tech' exact component={Tech} />
          <Route path='/product/:id' exact component={ProductPage} />
          <Route path='/mycart' exact component={CartPage} />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency?.currency,
});

export default connect(mapStateToProps)(App);
