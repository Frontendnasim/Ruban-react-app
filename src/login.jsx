import React from 'react';
import Header from './header';
import './login.css';
import Badge from './badge';
import Social from './social';
import Footer from './footer';

class Login extends React.Component {
    render() {
        return(
            <div className="login-body">
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="login-box flex-cc flex-column">
                                <p>یک ثبت نام راحت!</p>
                                <span className="login-title">تنها شماره موبایل خود را وارد نمایید</span>
                                <div className="d-flex flex-column">
                                    <label for="phone" className="phone d-flex justify-content-right">شماره موبایل</label>
                                    <div className="search-bar d-flex justify-content-center">
                                        <div className="phone-box">
                                            <input className="phone-input" type="text" placeholder="شماره موبایل"></input>
                                        </div>
                                    </div>
                                </div>
                                <button className="login-btn d-flex flex-cc" type="submit">دریافت کد</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Badge />
                <Social />
                <Footer />
            </div>
        );
    }
}

export default Login;