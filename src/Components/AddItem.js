import React, { Component } from 'react'

class AddItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Quantity</label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            onChange={this.props.updateQuantity}
                            style={{ width: '90vw' }} type="number" min='0' class="form-control" placeholder="Input Desired Quantity"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Products</label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <select
                            onChange={this.props.updateItemPrice}
                            style={{ width: '90vw' }} class="form-control">
                            <option selected disabled>Select an Option...</option>
                            {this.props.products.map(item => {
                                return (
                                    <option>{item.name} &cent;{item.priceInCents}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <button
                    onClick={this.props.addItems}
                    style={{ marginLeft: '80px' }} type="button" class="btn btn-primary">Submit</button>
            </form >
        );
    }
}
export default AddItem