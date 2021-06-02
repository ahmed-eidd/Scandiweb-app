import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductPage from './containers/ProductPage/ProductPage';
import Home from './containers/Women/Women.jsx';
export class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={ProductPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
