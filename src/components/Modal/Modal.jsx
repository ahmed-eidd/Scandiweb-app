import React, { PureComponent } from 'react';
import classes from './Modal.module.css';

export class Modal extends PureComponent {
  render() {
    const { children, style, top, left, right, bottom, className, open } =
      this.props;
    return (
      <div
        style={{
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          ...style,
        }}
        className={
          open
            ? [classes.Modal, classes.ModalOpen, className].join(' ')
            : [classes.Modal, className].join(' ')
        }
      >
        {children}
      </div>
    );
  }
}

export default Modal;
