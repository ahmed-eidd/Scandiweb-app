import React, { Component } from 'react';
import classes from './CardList.module.css';

export class CardList extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <>
        {title && <h1 className={classes.CardListTitle}>{title}</h1>}
        <div className={classes.CardList}>{children}</div>
      </>
    );
  }
}

export default CardList;
