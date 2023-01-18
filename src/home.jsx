import logo from './logo.svg';
import './home.css';

function Home() {
    return (
        <div className="body">

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>React</h2>
                    </div>
                    <div className="col-lg-4">
                        <h2>HTML</h2>
                    </div>
                    <div className="col-lg-4">
                        <h2>CSS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
