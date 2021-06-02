import React, { Component } from 'react';
import CartIcon from '../../../Icons/CartIcon';
import classes from './NavCart.module.css';

export class NavCart extends Component {
  render() {
    const style = {
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: ' 0 .5rem',
      padding: '0.5rem .5rem',
    };
    const spanStyle = {
      position: 'absolute',
      color: 'var(--color-light)',
      backgroundColor: 'var(--color-dark)',
      fontSize: '14px',
      padding: '.6rem',
      borderRadius: '50%',
      height: '20px',
      width: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '-6px',
      left: '17px',
    };

    return (
      <div style={style}>
        <span style={spanStyle}>1</span>
        <CartIcon />
        <div className={classes.MiniCart}></div>
      </div>
    );
  }
}

export default NavCart;
