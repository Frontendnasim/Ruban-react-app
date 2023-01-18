import React from 'react';
import './pagination.css';

class Pagination extends React.Component {
    state = {
        activePage: 0
    }

    pages = [{'name' : '1'},
    {'name' : '2'},
    {'name' : '3'},
    {'name' : '4'},
    {'name' : '...'}];

    changePage(index) {
        this.setState({ activePage : index })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <ul className="page col-lg-12 col-md-12 flex-cc flex-row-reverse">
                        <li className="pageBtn">
                            <span className="previousPage"><i class="fa fa-chevron-left"></i></span>
                        </li>
                        {this.pages?.map((prop,index) => {
                            return (
                                <li key={index} className={" " + (this.state.activePage === index ? "activePage" : "page-numbers")} onClick={() => this.changePage(index)}>{prop.name}</li>
                            )
                        })}
                        <li className="pageBtn">
                            <span className="nextPage"><i class="fa fa-chevron-right"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Pagination;