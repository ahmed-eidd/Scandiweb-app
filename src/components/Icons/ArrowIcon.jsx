import React, { Component } from 'react';

export class ArrowIcon extends Component {
  render() {
    const { open, className, width = 8, height = 4, style } = this.props;
    return (
      <svg
        style={style}
        className={className}
        width={width}
        height={height}
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: open ? ' rotate(180deg)' : ' rotate(0deg)',
          transition: 'transform .2s ease-in-out',
        }}
      >
        <path
          d="M1 0.5L4 3.5L7 0.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

export default ArrowIcon;
