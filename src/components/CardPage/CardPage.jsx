import React, { PureComponent } from 'react';
import Button from '../Button/Button';
import classes from './CardPage.module.css';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';
import {
  addItem,
  addMoreItem,
  animateCart,
  HideAnimateCart,
} from '../../store/cart/actions';

export class CardPage extends PureComponent {
  state = {
    currentImg: null,
    selectedAttributes: [],
    selectionError: false,
  };

  // select img to view
  selectImg = (img) => {
    this.setState({
      currentImg: img,
    });
  };

  // to convet html template to jsx
  parseHtml = (str) => {
    // check if node has children or not
    const ifHasChilds = (item, index) => {
      // if has children map and return them
      if (item.children.length > 0) {
        const itemsArr = [...item.children];
        const children = itemsArr.map((el, index) => ifHasChilds(el,index));

        return React.createElement(item.localName, { key: index }, children);
      } else {
        // if has no children return elemnt
        return React.createElement(
          item.localName,
          { key: index },
          item.innerHTML
        );
      }
    };
    const parser = new DOMParser();
    const parsedDoc = parser.parseFromString(str, 'text/html').body.childNodes;
    const doc = [...parsedDoc];
    const docArray = [];
    doc.map((el) => !!el.localName && docArray.push(el));

    // if array doesn't contain any html element
    if (docArray.length === 0) return <p>{str}</p>;

    return docArray.map((el, i) => ifHasChilds(el, i));
  };

  // select attribute to add to the cart
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
              ? { ...el, value: attr.value, id: attr.id }
              : el
          ),
        };
      });
    }
  };

  render() {
    const {
      product,
      currency,
      addItemToCart,
      currSymbol,
      hideAnimateCart,
      animateCart,
    } = this.props;
    const { currentImg, selectedAttributes, selectionError } = this.state;

  
    return (
      <div className={classes.CardPage}>
        <div className={classes.Gallery}>
          {/* Gallery */}

          <div className={classes.MiniGallery}>
            {product.gallery.map((el, i) => (
              <div
                className={classes.MiniImg}
                onClick={() => this.selectImg(el)}
                key={i}
              >
                <img src={el} alt='mini Product' />
              </div>
            ))}
          </div>
          <div className={classes.MainImg}>
            <img
              src={!currentImg ? product.gallery[0] : currentImg}
              alt='main'
            />
          </div>
        </div>

        {/* Description */}

        <div className={classes.Description}>
          <h2 className={classes.Title}>{product.name}</h2>

          {/* Attributes */}

          <div className={classes.Attributes}>
            {product.attributes.map((attribute, i) => (
              <React.Fragment key={i}>
                <p className={classes.Attribute}>{attribute.name}</p>
                <div className={classes.AttributeBtns}>
                  {attribute.items.map((item, i) => {
                    if (attribute.type === 'swatch') {
                      return (
                        <Button
                          sqActive={
                            !!selectedAttributes.find(
                              (el) => el.id === attribute.id + item.id
                            )
                          }
                          key={i}
                          type='square'
                          style={{ backgroundColor: item.value }}
                          onClick={() =>
                            this.selectAttr({
                              attr: attribute.name,
                              id: attribute.id + item.id,
                              value: item.value,
                            })
                          }
                        />
                      );
                    }
                    return (
                      <Button
                        sqActive={
                          !!selectedAttributes.find(
                            (el) => el.id === attribute.id + item.id
                          )
                        }
                        type='square'
                        key={i}
                        onClick={() =>
                          this.selectAttr({
                            attr: attribute.name,
                            id: attribute.id + item.id,
                            value: item.value,
                          })
                        }
                      >
                  
                        {item.value}
                      </Button>
                    );
                  })}
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Price */}

          <p className={classes.Price}>Price:</p>
          <p className={classes.Number}>
            {currSymbol + ' ' + getCurrentPrice(product.prices, currency)}{' '}
          </p>
          {product.inStock ? (
            <Button
              className={classes.Btn}
              onClick={() => {
                if (product.attributes.length === selectedAttributes.length) {
                  addItemToCart({
                    ...product,
                    selectedAttributes,
                    inCartId:
                      product.name +
                      selectedAttributes.map((attr) => attr.value).join(),
                  });
                  this.setState({ selectionError: false });
                  animateCart();
                  setTimeout(() => {
                    hideAnimateCart();
                  }, 400);
                } else {
                  this.setState({ selectionError: true });
                }
              }}
            >
              ADD TO CART
            </Button>
          ) : (
            <Button className={classes.Btn} disabled={!product.inStock}>
              Out of stock
            </Button>
          )}

          {selectionError && (
            <p className={classes.Warning}>
              You Have to select one of each Attributes
            </p>
          )}
          <div className={classes.Text}>
            {this.parseHtml(product.description)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  cart: state.cart.cart,
  currSymbol: state.currency.symbol,
});

const mapDispatchToProps = {
  addItemToCart: addItem,
  addMore: addMoreItem,
  animateCart: animateCart,
  hideAnimateCart: HideAnimateCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
