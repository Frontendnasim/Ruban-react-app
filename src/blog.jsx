import './blog.css';
import React, { component } from 'react';
import ReactDom from 'react-dom';
import Items from './items';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Blog extends React.Component {
    state = {
        activeTab: 0
    }


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

    links = [{ 'name': 'پرفروش ترین' },
    { 'name': 'جدیدترین' },
    { 'name': 'ارزان ترین' },
    { 'name': 'گران ترین' }];

    changeTab(index) {
        this.setState({ activeTab: index })
    }




    render() {
        return (
            <div className="container-fluid">
                <div className="row image">
                    <img src="/banner.jpg" alt="" />
                </div>

                <Link to="/" className="back">
                    <i class="fa fa-arrow-circle-left"></i>
                </Link>

                <div className="flex-cc links">
                    {this.links?.map((prop, index) => {
                        return (
                            <div onClick={() => this.changeTab(index)} style={{ backgroundColor: this.state.activeTab == index ? "lightblue" : "transparent" }}>{prop.name}</div>
                        )
                    })}
                </div>
                <div className="row blog-container">
                    {this.products?.map((prop, index) => {
                        return (
                            <Items key={index} data={prop} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Blog;