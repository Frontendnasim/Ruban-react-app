import './form.css';
import React from 'react';


class Form extends React.Component {

    state = {
        list: []
    }

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://chilik.net/chilik/test/getnames', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ list: data.info }));
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form">
                        {this.state.list?.map((prop, index) => {
                            return (
                                <div>
                                    <p>name: {prop.name}</p>
                                    <p>family: {prop.family}</p>
                                    <p>age: {prop.age}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Form