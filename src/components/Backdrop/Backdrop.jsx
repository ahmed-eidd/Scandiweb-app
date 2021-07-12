import React, { PureComponent } from 'react';
import classes from './Backdrop.module.css';

export class Backdrop extends PureComponent {
  render() {
    const { open, onClick } = this.props;
    return (
      <div
        onClick={onClick}
        className={
          open ? [classes.Container, classes.Open].join(' ') : classes.Container
        }
      >
        <div className={classes.Outsidedrop}></div>
        <div className={classes.Backdrop}></div>
      </div>
    );
  }
}

export default Backdrop;
