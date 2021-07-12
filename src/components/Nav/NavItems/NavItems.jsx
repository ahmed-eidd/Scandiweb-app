import React, { PureComponent } from 'react'
import NavItem from '../NavItem/NavItem'
import classes from './NavItems.moduel.css';

export class NavItems extends PureComponent {
  render() {
    return (
      <ul className={classes.NavItems}>
        <NavItem to='/'>
          All
        </NavItem>

        <NavItem to='/tech'>
          Tech
        </NavItem>
        <NavItem to='/clothes'>
          Clothes
        </NavItem>
      </ul>
    )
  }
}

export default NavItems
