import React, { Component } from 'react';
import CartHeader from './Components/CartHeader.js';
import CartFooter from './Components/CartFooter.js';
import CartItems from './Components/CartItems.js';
import AddItem from './Components/AddItem.js';
import './App.css';

class App extends Component {

  state = {
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    year: '2016',
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    newObj: {
      product: {
        // name: option.selected.value,
        // priceInCents: option.selected.data - item
        name: null,
        priceInCents: null
      },
      quantity: null
    }
  }
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} />
        <AddItem products={this.state.products} newObj={this.state.newObj} />
        <CartFooter year={this.state.year} />
      </div >
    );
  }
}

export default App;
