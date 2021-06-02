import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

export class Button extends Component {
  render() {
    const {
      children,
      type = 'button',
      to,
      isLoading,
      variant,
      onClick,
      style,
      className,
      sqFull,
      sqEmpty
    } = this.props;
    // css classes
    const btnClass =
      variant === 'outline'
        ? [classes.btn, classes.outline, className].join(' ')
        : [classes.btn, classes.filled, className].join(' ');
      const SquareBtnClasses = () => {
        let mainClass = classes.Square
        if (sqFull) {
          return [mainClass, classes.SquareFull].join(' ')
        } else if (sqEmpty) {
          return [mainClass, classes.SquareEmpty].join(' ')
        } else {
          return mainClass
        }
      }

    return (
      <>
        {/* If Button is a Link */}

        {type === 'link' && (
          <Link to={to} className={btnClass} onClick={onClick} style={style}>
            {isLoading ? (
              <div className={classes.loader}>Loading...</div>
            ) : (
              children
            )}
          </Link>
        )}

        {/* if Button is a Button */}

        {type === 'button' && (
          <button
            onClick={onClick}
            style={style}
            className={btnClass}
            type={type}
          >
            {isLoading ? (
              <div className={classes.loader}>Loading...</div>
            ) : (
              children
            )}
          </button>
        )}

        {/* if Button is a Square */}

        {
          type === 'square' && (
            <div className={SquareBtnClasses()}>{children}</div>
          )
        }
      </>
    );
  }
}

export default Button;
