import './mainBody.css';
import React from 'react';
import Header from './header';
import Product from './product.jsx';
import Pagination from './pagination';
import Badge from './badge';
import Social from './social';
import Footer from './footer';
import { withRouter } from "react-router-dom";
import Login from './login';

class MainBody extends React.Component {


    state = {
        activeTab: 0
    }

    products = [{ 'name': 'شامپو ضد ریزش مو زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو خشک و وز زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 32500 },
    { 'name': 'شامپو مو آسیب دیده و شکننده زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 32500 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 },
    { 'name': 'شامپو مو چرب زی مو حجم 250 میل', 'image': '/shampoo.jpg', 'price': 39000 }
    ];

    productSort = [{ 'name': 'پرفروش ترین' },
    { 'name': 'جدیدترین' },
    { 'name': 'ارزان ترین' },
    { 'name': 'گران ترین' }];


    componentDidMount() {
        //this.expenciveProducts(this.products)
        this.setState({ url: window.location.href })
        let path = window.location.pathname
        // path.split("/")
        // console.log(path.split("/")[2])
        // this.setState({ path: path.split("/")[2] })
        const id = this.props.match.params.id
        this.setState({ id })
    }






    // expenciveProducts(products) {
    //     let resultList = [];
    //     for (let i = 0; i < products.length; i++) {
    //         if (products[i].price > 33000) {
    //             resultList.push(products[i]);
    //         }
    //     }

    //     console.log(resultList);

    // }

    changeTab(index) {
        this.setState({ activeTab: index })
    }



    render() {
        return (
            <div className="body">
                <Header />
                <ul className="breadcrumb d-flex flex-row justify-content-start align-items-center">
                    <li className="breadcrumb-item">
                        <a href="#">محصولات مو</a>
                    </li>
                    <i class="fa fa-angle-left"></i>
                    <li className="breadcrumb-item">
                        <a href="#">مراقبت مو</a>
                    </li>
                    <i class="fa fa-angle-left"></i>
                    <li className="breadcrumb-item">
                        <a href="#">شامپو مو</a>
                    </li>
                    {/* <p>{this.state.url}</p> */}
                    {/* <p>{this.state.path}</p> */}
                    {/* <p>{this.state.id}</p> */}
                </ul>

                <div className="container-fluid main-body d-flex flex-row">
                    <div className="side-bar col-lg-2 ml-3 d-flex flex-column">
                        <div className="property-container">
                            <div className="filter d-flex flex-row justify-content-between align-items-center">
                                <span>فقط کالاهای موجود</span>
                                <div className="toggle-box d-flex justify-content-center align-items-center">
                                    <input type="checkbox" id="switch1" />
                                    <label for="switch1"></label>
                                </div>
                            </div>
                            <div className="filter d-flex flex-row justify-content-between align-items-center">
                                <span>فقط کالاهای تخفیف دار</span>
                                <div className="toggle-box d-flex justify-content-center align-items-center">
                                    <input type="checkbox" id="switch2" />
                                    <label for="switch2"></label>
                                </div>
                            </div>
                            <div className="cost-range d-flex flex-column">
                                <span class="side-bar-title">محدوده قیمت</span>
                                <div className="d-flex flex-column">
                                    <div className="side-bar-title">دسته بندی ها</div>
                                    <div className="content-box">
                                        <div>
                                            <label className="content">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="sub-content">مکمل درمانی مو</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="content">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="sub-content">اسپری مو</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="content">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="sub-content">روغن مو</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="content">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="sub-content">ماسک مو</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="content">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="sub-content">نرم کننده مو</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="content">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="sub-content">سرم مو</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-box col-lg-10 d-flex flex-column">
                        <div className="product-sort d-flex flex-row justify-content-start align-items-center">
                            <div className="title d-flex flex-row justify-content-between align-items-center">
                                <i class="fa fa-sort-amount-asc"></i>
                                <span>مرتب سازی بر اساس</span>
                            </div>

                            {this.productSort?.map((prop, index) => {
                                return (
                                    // <div onClick={() => this.changeTab(index)} style={{backgroundColor: this.state.activeTab == index ? "#ee5263" : "transparent"}} className="d-flex justify-content-center align-items-center sort-active">{prop.name}</div>
                                    <div key={index} className={" " + (this.state.activeTab === index ? "sortActive" : "")} onClick={() => this.changeTab(index)}>{prop.name}</div>
                                )
                            })}

                        </div>

                        {
                            this.state.activeTab === 0 && (
                                <p>پرفروش ترین</p>
                            )
                        }
                        {
                            this.state.activeTab === 1 && (
                                <p>جدیدترین</p>
                            )
                        }
                        {
                            this.state.activeTab === 2 && (
                                <p>ارزان ترین</p>
                            )
                        }
                        {
                            this.state.activeTab === 3 && (
                                <p>گران ترین</p>
                            )
                        }
                        <div className="row product-container m-0 align-items-stretch">
                            {this.products?.map((prop, index) => {
                                return (
                                    <Product key={index} data={prop} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* <Login /> */}
                <Pagination />
                <Badge />
                <Social />
                <Footer />
            </div >
        );
    }
}


export default withRouter(MainBody)