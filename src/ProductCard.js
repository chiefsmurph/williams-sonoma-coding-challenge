import React, { Component } from 'react';
import './ProductCard.css';

class App extends Component {
  componentDidMount() {
    console.log('mount');
  }
  render() {
    const { product } = this.props;
    const { href: heroImage } = product.hero;
    const stylesObj = { backgroundImage: `url('${heroImage}')` };
    return (
      <div className="product-card" style={stylesObj}>
        {this.props.product.name}
      </div>
    );
  }
}

export default App;
