import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import classes from './Nav.module.scss'
export class Nav extends Component {
  render() {
    return (
      <div>
        {/* <div className={classes.logo}></div> */}
        <Logo/>
      </div>

    )
  }
}

export default Nav;