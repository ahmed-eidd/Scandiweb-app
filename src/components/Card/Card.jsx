import React, { PureComponent } from 'react';
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

export class Card extends PureComponent {
  onCartAnimation = () => {
    this.props.animateCart();
    setTimeout(() => {
      this.props.hideAnimateCart();
    }, 400);
  };

  selectArttributesByDefault = (attr) => {
    return attr.map((el) => {
      return {
        value: el.items[0].value,
        attr: el.name,
        id: el.items[0].id,
      };
    });
  };

  onAddItemToCartHandler = () => {
    this.props.addToCart({
      ...this.props.product,
      inCartId:
        this.props.product.name +
        this.selectArttributesByDefault(this.props.product.attributes)
          .map((attr) => {
            return attr.value;
          })
          .join(),
      selectedAttributes: this.selectArttributesByDefault(
        this.props.product.attributes
      ),
    });
    this.onCartAnimation();
  };
  render() {
    const { img, title, price, id, curr, cart, product, disabled } = this.props;

    return (
      <div
        className={
          !disabled ? classes.Card : [classes.Card, classes.Disabled].join(' ')
        }
      >
        <Link
        className={classes.Link}
      
          to={`/product/${id}`}
        />
        {disabled && <h2 className={classes.OutOfStockTitle}>Out of Stock</h2>}
        {/* Img */}
        <div className={classes.CardImg}>
          <img src={img} alt='cardImg' />
        </div>
        <div className={classes.CardText}>
          <p className={classes.CardTitle}>{title}</p>

          <p className={classes.CardPrice}>
            {curr} {price}
          </p>
        </div>
        {!disabled && (
          <div
            className={classes.CardBtn}
            onClick={this.onAddItemToCartHandler}
          >
            {isInCart(cart, product) ? (
              <>
                <span>+</span>
                <CartIcon color='var(--color-light)' />
              </>
            ) : (
              <CartIcon color='var(--color-light)' />
            )}
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
