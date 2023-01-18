import React, { component } from 'react';
import ReactDom from 'react-dom';
import './items.css';


class Items extends React.Component {
    render() {
        return (
            < div className="col-lg-3 col-md-6 col-sm-12 product-items d-flex flex-column justify-content-start align-items-center" >
                <div className="d-flex flex-row justify-content-center align-items-start">
                    <img className="product-img" src={this.props.data.image} width="50%"></img>
                </div>
                <a href="#">{this.props.data.name}</a>
                <div className="price flex-cc">
                    <p>$</p>
                    <p>{this.props.data.price}</p>
                </div>
                <div className="add flex-cc">
                    <span>Add to cart</span>
                </div>
            </div>
        );
    }
}

export default Items;