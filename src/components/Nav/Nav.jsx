import React, { Component } from 'react';
import CartIcon from '../Icons/CartIcon';
import DollarIcon from '../Icons/DollarIcon';
import Logo from '../Logo/Logo';
import classes from './Nav.module.css';
import NavItems from './NavItems/NavItems';
export class Nav extends Component {
  state = {
    currOpen: false,
    cartOpen: false,
  };

  onCurrHandler = () => {
    this.setState({ currOpen: !this.state.currOpen, cartOpen: false });
  };

  render() {
    const { currOpen, cartOpen } = this.state;
    return (
      <div className={classes.Nav}>
        <NavItems />

        <Logo />
        <div className={classes.Icons}>
          <DollarIcon open={currOpen} onClick={this.onCurrHandler} />
          <CartIcon />
        </div>
      </div>
    );
  }
}

export default Nav;
