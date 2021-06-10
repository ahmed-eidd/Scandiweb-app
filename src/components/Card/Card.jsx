import React, { Component } from 'react';
import classes from './Card.module.css';
// import Img from '../../test.png';
import CartIcon from '../Icons/CartIcon';
import { Link } from 'react-router-dom';
import { isInCart } from '../../utilities/isInCart';
import { connect } from 'react-redux';
import {
  addMoreItem,
  addItem,
  animateCart,
  HideAnimateCart,
} from '../../store/cart/actions';

export class Card extends Component {

  onCartAnimation = () => {
    this.props.animateCart();
    setTimeout(() => {
      this.props.hideAnimateCart();
    }, 400);
  };

  render() {
    const {
      img,
      title,
      price,
      id,
      curr,
      cart,
      product,
      addMore,
      addToCart,
      hideAnimateCart,
      animateCart,
      disabled,
    } = this.props;

    
    return (
      <div
        className={
          !disabled ? classes.Card : [classes.Card, classes.Disabled].join(' ')
        }
      >
        {!disabled ? (
          <Link
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            to={`/product/${id}`}
          />
        ) : (
          <h2 className={classes.OutOfStockTitle}>Out of Stock</h2>
        )}

        {/* Img */}

        <div className={classes.CardImg}>
          <img src={img} alt="cardImg" />
        </div>

        <div className={classes.CardText}>
          <p className={classes.CardTitle}>{title}</p>

          <p className={classes.CardPrice}>
            {curr} {price}
          </p>
        </div>

        {isInCart(cart, product) ? (
          <div
            className={classes.CardBtn}
            onClick={() => {
              addMore(product);
              this.onCartAnimation();
            }}
          >
            <span>+</span>
            <CartIcon color="var(--color-light)" />
          </div>
        ) : (
          <div
            className={classes.CardBtn}
            onClick={() => {
              addToCart(product);
              this.onCartAnimation();
            }}
          >
            <CartIcon color="var(--color-light)" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  addToCart: addItem,
  addMore: addMoreItem,
  animateCart: animateCart,
  hideAnimateCart: HideAnimateCart,
};

export default connect(mapStateProps, mapDispatchToProps)(Card);
