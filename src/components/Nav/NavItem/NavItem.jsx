import React, { PureComponent } from 'react'
import {NavLink as Link} from 'react-router-dom';
import classes from './NavItem.module.css';

export class NavItem extends PureComponent {

  render() {
    const {children, to} = this.props
    return (
      <Link to={to} exact className={classes.NavItem} activeClassName={classes.active}>
      {children}
      </Link>
    )
  }
}

export default NavItem
