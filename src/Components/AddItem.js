import React, { Component } from 'react'

const AddItem = (props) => {
    let newItem = props.products.map(item => {
        return (
            <option>{item.name} &cent;{item.priceInCents}</option>
        )
    })

    return (
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Quantity</label>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                        onChange={props.updateQuantity}
                        style={{ width: '90vw' }} type="number" min='0' class="form-control" placeholder="Input Desired Quantity"></input>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Products</label>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <select
                        onChange={props.updateItemPrice}
                        style={{ width: '90vw' }} class="form-control">
                        <option selected disabled>Select an Option...</option>
                        {newItem}
                    </select>
                </div>
            </div>
            <button
                onClick={props.addItems}
                style={{ marginLeft: '80px' }} type="button" class="btn btn-primary">Submit</button>
        </form >
    );
}

export default AddItem