import React, { Component } from 'react'

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            item: '',
            price: '',
        }
    }

    render() {

        return (
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Quantity</label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            onChange={e => this.setState({ quantity: e.target.value })}
                            style={{ width: '90vw' }} type="number" min='0' class="form-control" placeholder="Input Desired Quantity"></input>
                        <h1>{this.state.quantity}</h1>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Products</label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <select
                            onChange={e => this.setState({ item: e.target.value.split(' ¢')[0], price: e.target.value.split(' ¢')[1] })}
                            style={{ width: '90vw' }} class="form-control">
                            <option selected disabled>Select an Option...</option>
                            {this.props.products.map(item => {
                                return (
                                    // <option value={obj} data={item.priceInCents} >{item.name} &cent;{item.priceInCents}</option>
                                    // <option value={item.name + '@' + item.priceInCents} data={item.priceInCents} >{item.name} &cent;{item.priceInCents}</option>
                                    <option>{item.name} &cent;{item.priceInCents}</option>
                                    // <option value={{ name: item.name, price: item.priceInCents }} data={item.priceInCents} >{item.name} &cent;{item.priceInCents}</option>
                                )
                            })}
                        </select>
                        <h6>{this.state.item}</h6>
                        <h6>{this.state.price}</h6>
                    </div>
                </div>
                <button
                    // onClick={submitAddItem} 
                    style={{ marginLeft: '80px' }} type="button" class="btn btn-primary">Submit</button>
            </form >
        );
    }

}
export default AddItem