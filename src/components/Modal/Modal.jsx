import React, { Component } from 'react';
import classes from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { children, style, top, left, right, bottom, className, open } =
      this.props;
    return (
      <div
        style={{
          display: open ? 'block' : 'none',
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          ...style,
        }}
        className={[classes.Modal, className].join(' ')}
      >
        {children}
      </div>
    );
  }
}

export default Modal;
