import classes from './Backdrop.module.css';
import React, { Component } from 'react';

export class Backdrop extends Component {
  render() {
    const { open } = this.props;
    return (
      <div
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
        className={classes.Backdrop}
      ></div>
    );
  }
}



export default Backdrop;
