import './shop.css';
import React from 'react';
import Items from './items';


class Shop extends React.Component {
    products = [{ 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 390 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    { 'name': 'Samsung Galaxy S21', 'image': '/samsung.jpg', 'price': 325 },
    ];






    render() {
        return (
            <div className="container">
                <div className="row product-container">
                    {this.products?.map((prop, index) => {
                        return (
                            <Items key={index} data={prop} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Shop;