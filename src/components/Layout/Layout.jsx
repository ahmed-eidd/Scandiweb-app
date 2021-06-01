import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Nav />
        <div>{children}</div>
      </div>
    );
  }
}

export default Layout;
