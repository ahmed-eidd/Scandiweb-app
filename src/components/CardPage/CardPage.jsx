import React, { Component } from 'react';
import Button from '../Button/Button';
import classes from './CardPage.module.css';
import Img from '../../test.png';
import { connect } from 'react-redux';
import { getCurrentPrice } from '../../utilities/getCurrentPrice';

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
    const { product, currency } = this.props;
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
            {product.attributes.map((attribute) => (
              <>
              <p className={classes.Attribute}>{attribute.name}</p>
              <div className={classes.AttributeBtns}>
                {
                  attribute.items.map((item) => {
                    let btn
                    if (attribute.type === 'swatch') {
                      return btn = <Button type="square" style={{backgroundColor: item.value}} />
                    }
                    return <Button type="square"> {item.value} </Button>
                  }
                  )
                }
              </div>
              </>
            ))}
          </div>

          <p className={classes.Price}>Price:</p>
          <p className={classes.Number}>
            {getCurrentPrice(product.prices, currency) + ' ' + currency}{' '}
          </p>
          <Button
            style={{
              width: '100%',
            }}
          >
            ADD TO CART
          </Button>
          <p className={classes.Text}>
            {/* Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands. */}
            {product.description}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
});

export default connect(mapStateToProps)(CardPage);
