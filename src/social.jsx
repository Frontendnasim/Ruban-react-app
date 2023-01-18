import React from 'react';
import './social.css';

class Social extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="centered flex-c">
                    <div className="social flex-cc flex-column">
                        <p>روبان را در شبكه هاي اجتماعي دنبال كنيد</p>
                        <div className="social-icons">
                            <img src="icons8-telegram-app.svg" alt="telegram" />
                            <img src="icons8-instagram.svg" alt="instagram" />
                            <img src="icons8-facebook.svg" alt="facebook" />
                            <img src="icons8-aparat.svg" alt="aparat" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;