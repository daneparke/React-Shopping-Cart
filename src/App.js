import React, { Component } from 'react';
import CartHeader from './Components/CartHeader.js';
import CartFooter from './Components/CartFooter.js';
import CartItems from './Components/CartItems.js';
import AddItem from './Components/AddItem.js';
import './App.css';
// ....................../´¯/) 
// ....................,/¯../ 
// .................../..../ 
// ............./´¯/'...'/´¯¯`·¸ 
// ........../'/.../..../......./¨¯\ 
// ........('(...´...´.... ¯~/'...') 
// .........\.................'...../ 
// ..........''...\.......... _.·´ 
// ............\..............( 
// ..............\.............\...

class App extends Component {

  constructor() {
    super();
    this.state = {
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
          item: null,
          price: null
        },
      },
      total: 3396,
      quantity: {}
    }
  }
  // state = {
  //   cartItemsList: [
  //     { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  //     { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  //     { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  //   ],
  //   year: '2016',
  //   products: [
  //     { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  //     { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  //     { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  //     { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  //     { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  //     { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  //     { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  //     { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  //     { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  //   ],
  //   newObj: {
  //     product: {
  //       item: null,
  //       price: null
  //     },
  //   },
  //   total: 3396,
  //   quantity: {}
  // }
  updateItemPrice = (event) => {
    this.setState({
      newObj: {
        product: {
          item: event.target.value.split(' ¢')[0],
          price: event.target.value.split(' ¢')[1]
        }
      }
    })
  }

  updateQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }
  addItems = (event) => {
    event.preventDefault()
    var newItem = {
      id: this.state.cartItemsList.length + 1,
      product: {
        name: this.state.newObj.product.item,
        priceInCents: this.state.newObj.product.price
      },
      quantity: this.state.quantity,
      itemTotal: Number(this.state.quantity * this.state.newObj.product.price)
    }
    this.setState({
      cartItemsList: [...this.state.cartItemsList, newItem],
    })
    this.setState({
      total: this.state.total + newItem.itemTotal
    })
  }
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} createTotal={this.createTotal} />
        <h2 class='row totalRow'>Total:&cent;<h2>{this.state.total}</h2></h2>
        <AddItem products={this.state.products} cartItemsList={this.state.cartItemsList}
          newObj={this.state.newObj} updateItemPrice={this.updateItemPrice}
          updateQuantity={this.updateQuantity}
          addItems={this.addItems} />
        <CartFooter year={this.state.year} />
      </div >
    );
  }
}

export default App;
