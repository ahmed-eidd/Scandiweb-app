import React, { PureComponent } from 'react';
import classes from './ArrowIcon.module.css';

export class ArrowIcon extends PureComponent {
  render() {
    const { open, className, width = 8, height = 4, style } = this.props;
    return (
      <svg
        className={
          open
            ? [classes.ArrowIcon, classes.Animate, className].join(' ')
            : [classes.ArrowIcon, className].join(' ')
        }
        width={width}
        height={height}
        viewBox='0 0 8 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={style}
      >
        <path
          d='M1 0.5L4 3.5L7 0.5'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  }
}

export default ArrowIcon;
