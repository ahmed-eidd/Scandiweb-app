import React, { Component } from 'react';
import classes from './NavCurr.module.css';
import { connect } from 'react-redux';
import { openCurr } from '../../../../store/modals/actions';
import Modal from '../../../Modal/Modal';
import Backdrop from '../../../Backdrop/Backdrop';
import DollarIcon from '../../../Icons/DollarIcon';
import ArrowIcon from '../../../Icons/ArrowIcon';
import {changeCurrency} from '../../../../store/currency/actions'

export class NavCurr extends Component {

  onCurrHandler = (curr) => {
    this.props.currChange(curr)
    this.props.currHandler(); 
  }

  render() {
    const { open, onClick, currHandler, currencies = [], currChange } = this.props;
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.IconContainer} onClick={currHandler}>
            <DollarIcon />
            <ArrowIcon open={open} />
          </div>

          <Modal open={open} className={classes.curr} top="100%">
            {currencies?.map((el) => (
              <div className={classes.currItem} onClick={() => this.onCurrHandler(el)} key={el}>{el}</div>
            ))}
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
  currHandler: openCurr,
  currChange: changeCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(NavCurr);
