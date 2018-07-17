import React, { Component } from 'react';
import './App.css';
import products from './products.json';

class App extends Component {
  componentDidMount() {
    console.log('mount');
    this.setState({
      products: products.groups
    }, () => console.log(this.state));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Williams-Sonoma products</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
