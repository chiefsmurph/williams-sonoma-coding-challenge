import React, { Component } from 'react';
import './App.css';
import products from './products.json';
import ProductCard from './ProductCard';

console.log(React.version)

class App extends Component {
  state = { products: [] };
  componentDidMount() {
    const firstNineProducts = products.groups.slice(0, 9);
    this.setState({ products: firstNineProducts });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <img src={'https://static.seekingalpha.com/uploads/2018/4/30/48736398-15250788513984.jpg'} />
          </h1>
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
