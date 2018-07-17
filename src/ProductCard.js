import React, { Component } from 'react';
import './ProductCard.css';
import ProductOverlay from './ProductOverlay';

class ProductCard extends Component {
  state = { showOverlay: false };
  showOverlay = () => this.setState({ showOverlay: true });
  closeOverlay = () => setImmediate(() => this.setState({ showOverlay: false }));
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
        onClick={this.showOverlay}>
        <h2>{product.name}</h2>
        <span className="price">${price}</span>
        { showOverlay && (
          <ProductOverlay
            product={product}
            closeOverlay={this.closeOverlay}
          />
        )}
      </div>
    );
  }
}

export default ProductCard;
