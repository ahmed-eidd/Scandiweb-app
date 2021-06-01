import React, { Component } from 'react'
import classes from './CardList.module.css'

export class CardList extends Component {
  render() {
    const {children} = this.props
    return (
      <div className={classes.CardList}>
         {children}
      </div>
    )
  }
}

export default CardList;
