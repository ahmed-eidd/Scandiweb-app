import React, { Component } from 'react';
import classes from './Card.module.css';
import Img from '../../test.png';
import CartIcon from '../Icons/CartIcon';

export class Card extends Component {
  render() {
    return (
      <div className={classes.Card}>
        <div className={classes.CardImg}>
          <img src={Img} alt="cardImg" />
        </div>
        <div className={classes.CardText}>
          <p className={classes.CardTitle}>Apollo Running Short</p>
          <p className={classes.CardPrice}>$50.00</p>
        </div>
        <div className={classes.CardBtn} >
          <CartIcon color='var(--color-light)' />
        </div>
      </div>
    );
  }
}

export default Card;
