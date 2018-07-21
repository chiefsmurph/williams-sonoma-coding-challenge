import React, { Component } from 'react';
import './ProductCard.css';
import ProductOverlay from './ProductOverlay';

const preloadImage = (src, cb) =>
  new Promise(resolve => {
    let image = new Image();
    image.src = src;
    image.onload = resolve;
    return image;
  });

class ProductCard extends Component {
  state = { showOverlay: false };
  showOverlay = () => this.setState({ showOverlay: true });
  closeOverlay = () => this.setState({ showOverlay: false });
  preloadFirstImgAndShowOverlay = async () => {
    const { product } = this.props;
    const firstImg = product.images[0].href;
    await preloadImage(firstImg);
    this.showOverlay();
  };
  onCardClick = () => {
    if (!this.state.showOverlay) {
      this.preloadFirstImgAndShowOverlay();
    }
  };
  render() {
    const { showOverlay } = this.state;
    const { product } = this.props;
    const { href: heroImage } = product.hero;
    const price = product.priceRange.regular.high;
    const stylesObj = { backgroundImage: `url('${heroImage}')` };
    return (
      <div
        className={`product-card ${showOverlay ? '' : 'no-overlay'}`}
        style={stylesObj}
        onClick={this.onCardClick}>
        <h2>{product.name}</h2>
        <span className="price">${price}</span>
        { showOverlay && (
          <ProductOverlay
            product={product}
            closeOverlay={this.closeOverlay}
            preloadImage={preloadImage}
          />
        )}
      </div>
    );
  }
}

export default ProductCard;
