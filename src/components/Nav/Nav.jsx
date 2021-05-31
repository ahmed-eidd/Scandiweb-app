import React, { Component } from 'react'
import CartIcon from '../Icons/CartIcon';
import DollarIcon from '../Icons/DollarIcon';
import Logo from '../Logo/Logo'
import classes from './Nav.module.css'
import NavItems from './NavItems/NavItems';
export class Nav extends Component {
  render() {
    return (
      <div className={classes.Nav}>
        <NavItems />
       
        <Logo/>
        <div className={classes.Icons}>
          <div>
          <DollarIcon />
          </div>
          <div>
          <CartIcon />
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;