import React, { Component } from 'react';
import './App.css';
import products from './products.json';
import ProductCard from './ProductCard';

class App extends Component {
  state = { products: [] };
  componentDidMount() {
    console.log('mount');
    const firstNineProducts = products.groups.slice(0, 9);
    this.setState({ products: firstNineProducts });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Williams-Sonoma products</h1>
        </header>
        <p className="card-container">
          {
            this.state.products.map(product =>
              <ProductCard product={product} />
            )
          }
        </p>
      </div>
    );
  }
}

export default App;
