import React, { Component } from 'react'
import NavItem from '../NavItem/NavItem'
import classes from './NavItems.moduel.css';

export class NavItems extends Component {
  render() {
    return (
      <ul className={classes.NavItems}>
        <NavItem to='/'>
          Women
        </NavItem>

        <NavItem to='/men'>
          Men
        </NavItem>
        <NavItem to='/kids'>
          Kids
        </NavItem>
      </ul>
    )
  }
}

export default NavItems
