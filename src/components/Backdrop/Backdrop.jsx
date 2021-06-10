import classes from './Backdrop.module.css';
import React, { Component } from 'react';

export class Backdrop extends Component {
  render() {
    const { open, onClick } = this.props;
    return (
      <div
        onClick={onClick}
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
        className={classes.Container}
      >
        <div className={classes.Outsidedrop} ></div>
        <div className={classes.Backdrop}></div>
      </div>
    );
  }
}



export default Backdrop;
