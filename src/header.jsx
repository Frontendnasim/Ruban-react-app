import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className="header">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo d-flex flex-column justify-content-center align-items-center">
                            <p>RUBAN.COM</p>
                            <p>تجربه صورتی خرید آنلاین</p>
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="search-bar d-flex justify-content-center">
                            <div className="search-box">
                                <div className="search-logo">
                                    <i className="fa fa-search"></i>
                                </div>
                                <input className="search-text" type="text" placeholder="محصول مورد نظرتان را جستجو کنید"></input>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="access-bar d-flex justify-content-end align-item-center">
                            <div className="login-container flex-cc">
                                <Link to="/login" className="login" style={{textDecoration: "none"}}>ورود</Link>
                            </div>
                            <div className="line"></div>
                            <div className="basket d-flex justify-content-center align-items-center">
                                <span className="zero d-flex justify-content-center align-items-center">0</span>
                                {/* <img src="/shopping-basket.png" alt="" /> */}
                                <span class="iconify" data-icon="mdi-shopping-outline" data-inline="false"></span>
                                <i className="shake mdi mdi-shopping-outline shake-hover"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container-fluid">
                <div className="row">
                    <nav className="nav d-flex flex-row align-items-center">

                        <div className="dropdown col-lg-2 d-flex align-items-center justify-content-center">
                            <a className="menu">
                                <i class="fa fa-bars"></i>
                                <span>دسته بندی محصولات</span>
                            </a>
                            {/* <div className="dropdown-content d-flex align-items-start">
                                <div className="menu-header">
                                    <h2>آرایشی</h2>
                                    <h2>پوستی</h2>
                                    <h2>مو</h2>
                                    <h2>بدن</h2>
                                    <h2>عطر</h2>
                                    <h2>اکسسوری</h2>
                                    <h2>سلامت و ورزش</h2>
                                    <h2>مردانه</h2>
                                    <h2>محصولات جانبی و برقی</h2>
                                    <h2>ضدعفونی و ماسک</h2>
                                </div>
                                <div className="row">
                                    <div className="column col-lg-3">
                                        <div className="column-header">
                                            <h3>آرایش صورت</h3>
                                            <i class="fa fa-chevron-left"></i>
                                        </div>
                                        <a href="#">کرم پودر</a>
                                        <a href="#">پنکیک</a>
                                        <a href="#">موس</a>
                                        <a href="#">کانسیلر</a>
                                        <a href="#">رژگونه</a>
                                        <a href="#">فیکساتور</a>
                                    </div>
                                    <div className="column col-lg-3">
                                        <div className="column-header">
                                            <h3>آرایش چشم</h3>
                                            <i class="fa fa-chevron-left"></i>
                                        </div>
                                        <a href="#">ریمل</a>
                                        <a href="#">خط چشم</a>
                                        <a href="#">مداد چشم</a>
                                        <a href="#">سایه چشم</a>
                                        <a href="#">مژه مصنوعی</a>
                                        <a href="#">فرمژه</a>
                                        <a href="#">پاک کننده</a>
                                    </div>
                                    <div className="column col-lg-3">
                                        <div className="column-header">
                                            <h3>آرایش لب</h3>
                                            <i class="fa fa-chevron-left"></i>
                                        </div>
                                        <a href="#">رژلب جامد</a>
                                        <a href="#">رژلب مایع</a>
                                        <a href="#">مداد لب</a>
                                        <a href="#">بالم لب</a>
                                        <a href="#">پرایمر لب</a>
                                    </div>
                                    <div className="column col-lg-3">
                                        <div className="column-header">
                                            <h3>آرایش ابرو</h3>
                                            <i class="fa fa-chevron-left"></i>
                                        </div>
                                        <a href="#">مداد ابرو</a>
                                        <a href="#">ریمل ابرو</a>
                                        <a href="#">سایه ابرو</a>
                                        <a href="#">رنگ ابرو</a>
                                        <a href="#">صابون ابرو</a>
                                    </div> */}
                            {/* <div className="column">
                                        <div className="column-header">
                                            <h3>آرایش ناخن</h3>
                                            <i class="fa fa-chevron-left"></i>
                                        </div>
                                        <a href="#">لاک ناخن</a>
                                        <a href="#">لاک پاک کن</a>
                                        <a href="#">مراقبت ناخن</a>
                                        <a href="#">سوهان و بافر ناخن</a>
                                        <a href="#">ناخن مصنوعی و چسب</a>
                                        <a href="#">برچسب ناخن</a>
                                    </div> */}
                            {/* </div>
                            </div> */}
                        </div>

                        <div className="line col-lg-1"></div>

                        <div className="nav-items col-lg-9 d-flex flex-row justify-content-start">
                            <a className="brands d-flex align-items-center">
                                <i class="fa fa-th"></i>
                                <span>برندها</span>
                            </a>
                            <a className="ruban bazaar d-flex align-items-center">
                                <i class="fa fa-percent"></i>
                                <span>روبان بازار</span>
                            </a>
                            <a className="my-products d-flex align-items-center">
                                <i class="fa fa-gift"></i>
                                <span>محصولات مناسب من</span>
                            </a>
                            <a className="gift d-flex align-items-center">
                                <i class="fa fa-gift"></i>
                                <span>هدیه</span>
                            </a>
                            <a className="ruban-gram d-flex align-items-center">
                                <i class="fa fa-users"></i>
                                <span>روبان گرام</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>




        </div>


    );
}

export default Header;