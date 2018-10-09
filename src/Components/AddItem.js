import React from 'react'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

const AddItem = (props) => {
    // constructor(props)
    // super(props);

    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //     dropdownOpen: false
    // };


    // toggle()
    // this.setState(prevState => ({
    //     dropdownOpen: !prevState.dropdownOpen
    // }));


    var dropDownItems = props.products.map(item => {
        return (
            // <a className="dropdown-item" href="#">{item.name}{item.priceInCents}</a>
            // <MenuItem text={item.name}{item.priceInCents} location="/home" />
            // <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
            //     <li ><a href="#">{item.name} {item.priceInCents}</a></li>
            // </div>
            <option href="#">{item.name} {item.priceInCents}</option>

            // <li><a href="#">{item.name}{item.priceInCents}</a></li>

        )
    })

    return (
        <React.Fragment>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Quantity</label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input style={{ width: '90vw' }} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Input Desired Quantity"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Products</label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <select style={{ width: '90vw' }} class="form-control" id="exampleFormControlSelect1">
                            <option selected disabled>Select an Option...</option>
                            {dropDownItems}
                        </select>
                    </div>
                </div>
            </form>
        </React.Fragment>

        // <div class="form-group">
        //     <label for="exampleFormControlSelect1">Example select</label>
        //     <select class="form-control" id="exampleFormControlSelect1">
        //         <option>1</option>
        //         <option>2</option>
        //         <option>3</option>
        //         <option>4</option>
        //         <option>5</option>
        //     </select>
        // </div>


        // <DropdownMenu>
        //     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         Select an Option...
        //     </button>
        //     {dropDownItems}
        //     <MenuItem text={dropDownItems} location="/home" />
        // </DropdownMenu>


        // <DropdownMenu userName="Chris Smith">
        //     <MenuItem text="Home" location="/home" />
        //     <MenuItem text="Edit Profile" location="/profile" />
        //     <MenuItem text="Change Password" location="/change-password" />
        //     <MenuItem text="Privacy Settings" location="/privacy-settings" />
        //     <MenuItem text="Delete Account" onClick={this.deleteAccount} />
        //     <MenuItem text="Logout" onClick={this.logout} />
        // </DropdownMenu>
        // <div className="dropdown">
        //     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         Select an Option...
        //     </button>
        //     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //         {dropDownItems}
        //     </div>
        // </div>
        // <div>
        //     <div class="dropdown">
        //         <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select an Option...
        //     <span class="caret"></span></button>
        //         <ul class="dropdown-menu">
        //             <li><a href='#'>hi</a></li>
        //             <li>hi</li>
        //             <li>hi</li>

        //         </ul>
        //     </div>
        // </div>
        //         <div class="dropdown">
        //             <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
        //   <span class="caret"></span></button>
        //             <ul class="dropdown-menu">
        //                 <li><a href="#">HTML</a></li>
        //                 <li><a href="#">CSS</a></li>
        //                 <li><a href="#">JavaScript</a></li>
        //             </ul>
        //         </div>


    )
}
export default AddItem