import React from 'react';
import './badge.css';

class Badge extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="badge flex-cc">
                        <div className="badge-item col-lg-4">
                            <img src="/guarantee.png" alt="" />
                            <h6>ضمانت اصل بودن كالا</h6>
                        </div>
                        <div className="badge-item col-lg-4">
                            <img src="/return-purchase.png" alt="" />
                            <h6>7 روز ضمانت بازگشت كالا</h6>
                        </div>
                        <div className="badge-item col-lg-4">
                            <img src="/truck.png" alt="" />
                            <h6>ارسال سريع</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Badge;