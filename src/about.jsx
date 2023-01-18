import logo from './logo.svg';
import './about.css';

function About() {
    return (
        <div className="about">
            <p>About Us</p>
            <ul>
                <li>
                    <a>Email</a>
                </li>
                <li>
                    <a>Phone</a>
                </li>
                <li>
                    <a>Address</a>
                </li>
            </ul>
        </div>
    );
}

export default About;
