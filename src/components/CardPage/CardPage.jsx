import React, { Component } from 'react';
import Button from '../Button/Button';
import classes from './CardPage.module.css';
import Img from '../../test.png';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';
import { addItem, addMoreItem} from '../../store/cart/actions';
import { isInCart } from '../../utilities/isInCart';

export class CardPage extends Component {
  state = {
    currentImg: null,
  };

  selectImg = (img) => {
    this.setState({
      currentImg: img,
    });
  };

  render() {
    const { product, currency, addItemToCart, cart, addMore, cartSelect } = this.props;
    const { currentImg } = this.state;
  
    return (
      <div className={classes.CardPage}>
        <div className={classes.Gallery}>
          <div className={classes.MiniGallery}>
            {product.gallery.map((el, i) => (
              <div
                className={classes.MiniImg}
                onClick={() => this.selectImg(el)}
                key={i}
              >
                <img src={el} alt="mini Product Image" />
              </div>
            ))}
          </div>
          <div className={classes.MainImg}>
            <img
              src={!currentImg ? product.gallery[0] : currentImg}
              alt="main"
            />
          </div>
        </div>

        {/* Description */}
        <div className={classes.Description}>
          <h2 className={classes.Title}>{product.name}</h2>
          <div className={classes.Attributes}>
            {product.attributes.map((attribute, i) => (
              <>
                <p className={classes.Attribute} key={i}>
                  {attribute.name}
                </p>
                <div className={classes.AttributeBtns}>
                  {attribute.items.map((item, i) => {
                    let btn;
                    if (attribute.type === 'swatch') {
                      return (btn = (
                        <Button
                          key={i}
                          type="square"
                          style={{ backgroundColor: item.value }}
                        />
                      ));
                    }
                    return (
                      <Button type="square" key={i}>
                        {' '}
                        {item.value}{' '}
                      </Button>
                    );
                  })}
                </div>
              </>
            ))}
          </div>

          <p className={classes.Price}>Price:</p>
          <p className={classes.Number}>
            {getCurrentPrice(product.prices, currency) + ' ' + currency}{' '}
          </p>
          {isInCart(cart, product) ? (
            <Button style={{ width: '100%' }} onClick={() => addMore(product)}>Add More</Button>
          ) : (
            <Button
              onClick={() => addItemToCart(product)}
              style={{
                width: '100%',
              }}
            >
              ADD TO CART
            </Button>
          )}
          <div
            className={classes.Text}
            dangerouslySetInnerHTML={{ __html: product.description }}
          >
            {/* Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands. */}
            {/* {product.description.replace(/['"]+/g, '')} */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  addItemToCart: addItem,
  addMore: addMoreItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
