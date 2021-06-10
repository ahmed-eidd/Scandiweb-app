import React, { Component } from 'react';
import CartIcon from '../../../Icons/CartIcon';
import MiniCart from '../../../MiniCart/MiniCart';
import classes from './NavCart.module.css';
import { connect } from 'react-redux';
import { cartModalAction } from '../../../../store/modals/actions';
import Backdrop from '../../../Backdrop/Backdrop';

export class NavCart extends Component {
  render() {
    const { open, openAction,  cartCount, cartAnimation } = this.props;

    const style = {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: ' 0 .5rem',
      padding: '0.5rem .5rem',

    };
    const spanStyle = {
      cursor: 'pointer',
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
      <>
        <div style={style}>
          <span style={spanStyle} onClick={openAction}>
            {cartCount}
          </span>
          <CartIcon onClick={openAction} className={cartAnimation ? classes.rotate : ''} />
          <MiniCart open={open} />
          <Backdrop open={open} onClick={openAction} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.modals.cartOpen,
  cart: state.cart.cart,
  cartCount: state.cart.count,
    cartAnimation: state.cart.animateCart
});

const mapDispatchToProps = {
  openAction: cartModalAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavCart);
