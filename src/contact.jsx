import './contact.css';

function Contact() {
    return (
        <div className="body">
            <div className="container ">
                <div className="row">
                    <div className="contact col-lg-8 col-sm flex-cc flex-column">
                        <h1>Contact Us</h1>
                        <div className="name flex-cc">
                            <input type="text" placeholder="Enter your name..." />
                            <p>Name</p>
                        </div>
                        <div className="phone flex-cc">
                            <input type="text" />
                            <p>Phone</p>
                        </div>
                        <div className="mail flex-cc">
                            <input type="text" />
                            <p>Email</p>
                        </div>
                        <button className="submit">Submit</button>
                    </div>
                    <div className="col-lg-4 col-sm side">
                        <p>Phone: 3652500</p>
                        <a>Email: n_shiroodi@yahoo.com</a>
                        <p>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
