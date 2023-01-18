import React, { component } from 'react';
import ReactDom from 'react-dom';


class Product extends React.Component {
    render() {
        return (
            < div className="col-12 col-lg-3 col-sm-2 product-item d-flex flex-column justify-content-start align-items-center" >
                <div className="d-flex flex-row justify-content-center align-items-start">
                    <div className="add-favorite">
                        <i className="fa fa-heart-o"></i>
                    </div>
                    <img className="product-img" src={this.props.data.image} width="50%"></img>
                </div>
                <a href="#">{this.props.data.name}</a>
                <div className="price d-flex flex-row justify-content-center align-items-center">
                    <p>{this.props.data.price}</p>
                    <p>تومان</p>
                </div>
                <div className="add-product d-flex flex-row justify-content-center align-items-center">
                    <span>خرید</span>
                    <div className="nullified d-flex justify-content-center align-items-center">
                        <span className="zero d-flex justify-content-center align-items-center">+</span>
                        <span class="iconify" data-icon="mdi-shopping-outline" data-inline="false"></span>
                        <i className="shake mdi mdi-shopping-outline shake-hover"></i>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;
