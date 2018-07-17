import React, { Component } from 'react';
import './ProductCard.css';

class App extends Component {
  componentDidMount() {
    console.log('mount');
  }
  render() {
    const { product } = this.props;
    const { href: heroImage } = product.hero;
    const price = product.priceRange.regular.high;
    const stylesObj = { backgroundImage: `url('${heroImage}')` };
    return (
      <div className="product-card" style={stylesObj}>
        <h2>{product.name}</h2>
        <span className="price">${price}</span>
      </div>
    );
  }
}

export default App;
