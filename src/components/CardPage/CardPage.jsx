import React, { Component } from 'react';
import Button from '../Button/Button';
import classes from './CardPage.module.css';
import Img from '../../test.png';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';
import { addItem, addMoreItem } from '../../store/cart/actions';
import { isInCart } from '../../utilities/isInCart';

export class CardPage extends Component {
  state = {
    currentImg: null,
    selectedAttributes: [],
    selectionError: false,
  };

  selectImg = (img) => {
    this.setState({
      currentImg: img,
    });
  };

  selectAttr = (attr) => {
    const attrIndex = this.state.selectedAttributes.findIndex(
      (x) => x.attr === attr.attr
    );
    if (attrIndex === -1 || this.state.selectedAttributes.length === 0) {
      this.setState((prevState) => ({
        selectedAttributes: [...prevState.selectedAttributes, attr],
      }));
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          selectedAttributes: prevState.selectedAttributes.map((el) =>
            el.attr === this.state.selectedAttributes[attrIndex].attr
              ? { ...el, value: attr.value }
              : el
          ),
        };
      });
    }
  };

  render() {
    const { product, currency, addItemToCart, cart, addMore, cartSelect } =
      this.props;
    const { currentImg, selectedAttributes, selectionError } = this.state;
    console.log(selectedAttributes);
    console.log(selectionError);

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
                          sqActive={
                            !!selectedAttributes.find(
                              (el) => el.value === item.value
                            )
                          }
                          key={i}
                          type="square"
                          style={{ backgroundColor: item.value }}
                          onClick={() =>
                            this.selectAttr({
                              attr: attribute.name,
                              id: item.id,
                              value: item.value,
                            })
                          }
                        />
                      ));
                    }
                    return (
                      <Button
                        sqActive={
                          !!selectedAttributes.find(
                            (el) => el.value === item.value
                          )
                        }
                        type="square"
                        key={i}
                        onClick={() =>
                          this.selectAttr({
                            attr: attribute.name,
                            id: item.id,
                            value: item.value,
                          })
                        }
                      >
                        {item.value}
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
            <Button style={{ width: '100%' }} onClick={() => addMore(product)}>
              Add More
            </Button>
          ) : (
            <Button
              onClick={() => {
                if (product.attributes.length === selectedAttributes.length) {
                  addItemToCart({ ...product, selectedAttributes });
                  this.setState({ selectionError: false });
                } else {
                  this.setState({ selectionError: true });
                }
              }}
              style={{
                width: '100%',
              }}
            >
              ADD TO CART
            </Button>
          )}
          {selectionError && (
            <p className={classes.Warning}>
              You Have to select one of each Attributes
            </p>
          )}
          <div
            className={classes.Text}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
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
  addMore: addMoreItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
