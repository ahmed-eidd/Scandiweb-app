import React, { PureComponent } from 'react';
import CartIcon from '../../../Icons/CartIcon/CartIcon';
import MiniCart from '../../../MiniCart/MiniCart';
import classes from './NavCart.module.css';
import { connect } from 'react-redux';
import { cartModalAction } from '../../../../store/modals/actions';
import Backdrop from '../../../Backdrop/Backdrop';

export class NavCart extends PureComponent {
  render() {
    const { open, openAction, cartCount, cartAnimation } = this.props;
    return (
      <>
        <div  className={classes.NavCart}>
          <span  className={classes.NavCartCount} onClick={openAction}>
            {cartCount}
          </span>
          <CartIcon
            onClick={openAction}
            className={cartAnimation ? classes.rotate : ''}
          />
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
  cartAnimation: state.cart.animateCart,
});

const mapDispatchToProps = {
  openAction: cartModalAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavCart);
