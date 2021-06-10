import React, { Component } from 'react';
import classes from './CartPage.module.css';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { addLessItem, addMoreItem, deleteItem } from '../../store/cart/actions';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';

export class CartPage extends Component {
  calEachItem = (item) => {
    const itemCount = this.props.cart?.find((x) => x.name === item.name)?.count;
    return (
      itemCount * getCurrentPrice(item.prices, this.props.currency)
    ).toFixed(2);
  };
  render() {
    const {
      increaseItem,
      descreaseItem,
      removeItem,
      cart,
      currency,
      currSymbol,
    } = this.props;

    return (
      <div>
        <h1 style={{ marginBottom: '3rem', textTransform: 'uppercase' }}>
          Cart
        </h1>
        {cart.map((item, i) => (
          <div className={classes.Item} key={i}>
            <div className={classes.ItemTitleAndPrice}>
              <p className={classes.Title}>{item.name}</p>
              <p className={classes.Price}>
                {currSymbol + ' ' + this.calEachItem(item)}{' '}
              </p>
              <div className={classes.Attributes}>
                {item.selectedAttributes?.map((el, i) =>
                  el.attr === 'Color' ? (
                    <Button
                      key={i}
                      type="square"
                      style={{ backgroundColor: el.value }}
                    ></Button>
                  ) : (
                    <Button key={i} type="square">
                      {el.value}
                    </Button>
                  )
                )}
              </div>
            </div>
            <div className={classes.ImgAndAmountBtns}>
              <div className={classes.AmountBtns}>
                <Button type="square" onClick={() => increaseItem(item)}>
                  +
                </Button>
                <p>{item.count}</p>
                <Button
                  type="square"
                  onClick={() => {
                    item.count > 1 ? descreaseItem(item) : removeItem(item);
                  }}
                >
                  -
                </Button>
              </div>
              <div className={classes.ItemImg}>
                <img src={item.gallery[0]} alt="" />
              </div>
            </div>
          </div>
        ))}
        <Button>Check Out</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.currency.currency,
  currSymbol: state.currency.symbol,
});

const mapDispatchToProps = {
  increaseItem: addMoreItem,
  descreaseItem: addLessItem,
  removeItem: deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
