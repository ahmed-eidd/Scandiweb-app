import React, { Component } from 'react';
import classes from './Card.module.css';
// import Img from '../../test.png';
import CartIcon from '../Icons/CartIcon';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Card extends Component {
  render() {
    const { img, title, price, id, curr } = this.props;
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
        <div className={classes.CardBtn}>
          <CartIcon color="var(--color-light)" />
        </div>
      </div>
    );
  }
}

export default Card;
