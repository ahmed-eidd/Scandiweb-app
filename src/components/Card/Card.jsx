import React, { Component } from 'react';
import classes from './Card.module.css';
// import Img from '../../test.png';
import CartIcon from '../Icons/CartIcon';
import { Link } from 'react-router-dom';
import { isInCart } from '../../utilities/isInCart';
import { connect } from 'react-redux';
import { addMoreItem, addItem } from '../../store/cart/actions';

export class Card extends Component {
  render() {
    const { img, title, price, id, curr, cart, product, addMore, addToCart } =
      this.props;
    return (
      <div className={classes.Card}>
        <Link
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          to={`/product/${id}`}
        />
        <div className={classes.CardImg}>
          <img src={img} alt="cardImg" />
        </div>
        <div className={classes.CardText}>
          <p className={classes.CardTitle}>{title}</p>
          <p className={classes.CardPrice}>
            {price} {curr}
          </p>
        </div>
        {isInCart(cart, product) ? (
          <div className={classes.CardBtn} onClick={() => addMore(product)}>
            <span>+</span>
            <CartIcon color="var(--color-light)" />
          </div>
        ) : (
          <div className={classes.CardBtn} onClick={() => addToCart(product)}>
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
};

export default connect(mapStateProps, mapDispatchToProps)(Card);
