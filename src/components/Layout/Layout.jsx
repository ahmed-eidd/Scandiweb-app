import classes from './Layout.module.css';
import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={classes.Layout}>
        <Nav />
        <div className={classes.Content}>{children}</div>
      </div>
    );
  }
}

export default Layout;
