import React, { component } from 'react';
import ReactDom from 'react-dom';



class Timer extends React.Component {
    state = {
        seconds: 0
    }

    componentDidMount() {
        setInterval(() => {
            let seconds = this.state.seconds;
            seconds = seconds + 1;
            if (seconds > 20) {
                seconds = 0;
            }

            this.setState({ seconds });

        }, 500);
    }

    render() {
        return (
            <div>
                <p className="timer" style={{ fontSize: 40, color: this.state.seconds > 10 ? '#ee5050' : '#000' }}>{this.state.seconds}</p>

                {this.state.seconds > 10 && (
                    <p>Cooooool</p>
                )}
            </div>
        );
    }
}

export default Timer;