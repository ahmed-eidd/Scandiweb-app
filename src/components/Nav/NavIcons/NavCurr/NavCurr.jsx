import React, { Component } from 'react';
import classes from './NavCurr.module.css';
import { connect } from 'react-redux';
import { currOpenAction } from '../../../../store/modals/slice';
import Modal from '../../../Modal/Modal';
import Backdrop from '../../../Backdrop/Backdrop';
import DollarIcon from '../../../Icons/DollarIcon';
import ArrowIcon from '../../../Icons/ArrowIcon';

export class NavCurr extends Component {
  render() {
    const { open, onClick, currHandler } = this.props;
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.IconContainer} onClick={currHandler}>
            <DollarIcon />
            <ArrowIcon open={open} />
          </div>

          <Modal open={open} className={classes.curr} top="100%">
            <div>$ USD</div>
            <div>€ EUR</div>
            <div>¥ JPY</div>
          </Modal>
        </div>
        <Backdrop open={open} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.modals.currOpen,
});
const mapDispatchToProps = {
  currHandler: currOpenAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavCurr);
