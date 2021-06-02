import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import classes from './MiniCart.module.css';
import Img from '../../test.png';

export class MiniCart extends Component {
  render() {
    const { open } = this.props;
    return (
      <Modal open={open} top="150%" className={classes.MiniCart}>
        <h2>
          My Bag, <span>2 items</span>
        </h2>
        <div className={classes.Item}>
          <div className={classes.ItemTitleAndPrice}>
            <p className={classes.Title}>
              Apollo <span>Running Short</span>
            </p>
            <p className={classes.Price}>$50.00</p>
            <div className={classes.Sizes}>
              <Button sqMini type="square">S</Button>
              <Button sqMini type="square" sqFull>
                M
              </Button>
            </div>
          </div>
          <div className={classes.ImgAndAmountBtns}>
            <div className={classes.AmountBtns}>
              <Button sqMini type="square">+</Button>
              <p>1</p>
              <Button sqMini type="square">-</Button>
            </div>
            <div className={classes.ItemImg}>
              <img src={Img} alt="" />
            </div>
          </div>
        </div>

        <div className={classes.Item}>
          <div className={classes.ItemTitleAndPrice}>
            <p className={classes.Title}>
              Apollo <span>Running Short</span>
            </p>
            <p className={classes.Price}>$50.00</p>
            <div className={classes.Sizes}>
              <Button sqMini type="square">S</Button>
              <Button sqMini type="square" sqFull>
                M
              </Button>
            </div>
          </div>
          <div className={classes.ImgAndAmountBtns}>
            <div className={classes.AmountBtns}>
              <Button sqMini type="square">+</Button>
              <p>1</p>
              <Button sqMini type="square">-</Button>
            </div>
            <div className={classes.ItemImg}>
              <img src={Img} alt="" />
            </div>
          </div>
        </div>

          <div className={classes.Item}>
          <div className={classes.ItemTitleAndPrice}>
            <p className={classes.Title}>
              Apollo <span>Running Short</span>
            </p>
            <p className={classes.Price}>$50.00</p>
            <div className={classes.Sizes}>
              <Button sqMini type="square">S</Button>
              <Button sqMini type="square" sqFull>
                M
              </Button>
            </div>
          </div>
          <div className={classes.ImgAndAmountBtns}>
            <div className={classes.AmountBtns}>
              <Button sqMini type="square">+</Button>
              <p>1</p>
              <Button sqMini type="square">-</Button>
            </div>
            <div className={classes.ItemImg}>
              <img src={Img} alt="" />
            </div>
          </div>
        </div>

        <div className={classes.Total}>
          <p className={classes.TotalText}>total</p>
          <p className={classes.TotalNumber}>$100.00</p>
        </div>
        <div className={classes.ActionBtns}>
          <Button type="link" to="/mycart" variant="outline">View Bag</Button>
          <Button>Check Out</Button>
        </div>
      </Modal>
    );
  }
}

export default MiniCart;
