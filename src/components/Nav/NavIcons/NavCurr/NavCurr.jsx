import React, { Component } from 'react';
import classes from './NavCurr.module.css';
import { connect } from 'react-redux';
import { currModalAction } from '../../../../store/modals/actions';
import Modal from '../../../Modal/Modal';
import Backdrop from '../../../Backdrop/Backdrop';
import ArrowIcon from '../../../Icons/ArrowIcon';
import { changeCurrency } from '../../../../store/currency/actions';

export class NavCurr extends Component {
  onCurrHandler = (curr) => {
    this.props.currChange(curr);
    this.props.currHandler();
  };

  render() {
    const {
      open,
      currHandler,
      currencies = [],
      symbol,

    } = this.props;

    return (
      <>
        <div className={classes.Container} >
          <div className={classes.clicker} onClick={currHandler}></div>
          <div className={classes.IconContainer}>
            <div className={classes.symbol}>
              {symbol}
            </div>
            <ArrowIcon open={open} />
          </div>

          <Modal open={open} className={classes.curr} top="100%">
            {currencies?.map((el) => (
              <div
                className={classes.currItem}
                onClick={() => this.onCurrHandler(el)}
                key={el}
              >
                {el}
              </div>
            ))}
          </Modal>
        </div>
        <Backdrop open={open} onClick={currHandler} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.modals.currOpen,
  symbol: state.currency.symbol,
  cartAnimation: state.cart.animateCart
});
const mapDispatchToProps = {
  currHandler: currModalAction,
  currChange: changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavCurr);
