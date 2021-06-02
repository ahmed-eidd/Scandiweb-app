import React, { Component } from 'react';
import Button from '../Button/Button';
import classes from './CardPage.module.css';
import Img from '../../test.png';

export class CardPage extends Component {
  state = {
    mainImgIndex: 0,
    Imgs: []
  }
  render() {
    return (
      <div className={classes.CardPage}>
        <div className={classes.Gallery}>
          <div className={classes.MiniGallery}>
            <div className={classes.MiniImg}>
              <img src={Img} alt="mini" />
            </div>
            <div className={classes.MiniImg}>
              <img src={Img} alt="mini" className={classes.MiniImg} />
            </div>
            <div className={classes.MiniImg}>
              <img src={Img} alt="mini" />
            </div>
          </div>
          <div className={classes.MainImg}>
            <img src={Img} alt="main" />
          </div>
        </div>

        {/* Description */}
        <div className={classes.Description}>
          <h2 className={classes.Title}>
            <span>Apollo</span> Running Short
          </h2>
          <div className={classes.Sizes}>
            <p className={classes.Size}>SIZE:</p>
            <div className={classes.SizeBtns}>
              <Button type="square" sqEmpty>XS</Button>
              <Button type="square" sqFull>S</Button>
              <Button type="square">M</Button>
              <Button type="square">L</Button>
            </div>
          </div>

          <p className={classes.Price}>Price:</p>
          <p className={classes.Number}>$50.00</p>
          <Button style={{
            width: '100%'
          }}>ADD TO CART</Button>
          <p className={classes.Text}>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    );
  }
}

export default CardPage;
