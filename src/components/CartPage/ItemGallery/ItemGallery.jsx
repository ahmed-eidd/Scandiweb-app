import React, { Component } from 'react';
import classes from './ItemGallery.module.css';

export class ItemGallery extends Component {
  state = {
    galleryImgIndex: 0,
  };
  galleryNextImgHandler = (gallery) => {
    this.setState({
      galleryImgIndex:
        gallery.length - 1 === this.state.galleryImgIndex
          ? 0
          : this.state.galleryImgIndex + 1,
    });
  };
  galleryLastImgHandler = (gallery) => {
    this.setState({
      galleryImgIndex:
        this.state.galleryImgIndex === 0
          ? gallery.length - 1
          : this.state.galleryImgIndex - 1,
    });
  };
  render() {
    const { gallery } = this.props;
    const { galleryImgIndex } = this.state;
    return (
      <div className={classes.ItemImg}>
        {gallery?.length > 1 && (
          <div className={classes.ItemImgBtns}>
            <i
              className='fas fa-chevron-left'
              onClick={() => this.galleryLastImgHandler(gallery)}
            ></i>
            <i
              className='fas fa-chevron-right'
              onClick={() => this.galleryNextImgHandler(gallery)}
            ></i>
          </div>
        )}
        <img src={gallery[galleryImgIndex]} alt='' />
      </div>
    );
  }
}

export default ItemGallery;
