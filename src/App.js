import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
export class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route />
        </Switch>
      </Layout>
    );
  }
}

export default App;
