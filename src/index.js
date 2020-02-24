import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {lat: null, long: null, errorMessage: ''};
    // }

    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            GeolocationPosition => this.setState({ lat: GeolocationPosition.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }


    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div className="ui error message">
                    <i className="close icon"></i>
                    <div className="header">
                        Error: {this.state.errorMessage}
                    </div>
                </div>
            )
        }

        if(!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat}/>
                </div>
            );
        }
        return <Spinner  messageSpinner= "Please accept the request location"/>
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


// Just to test the knowledge

// class Clock extends React.Component {

//     state = {time: new Date().toLocaleTimeString()};

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({time: new Date().toLocaleTimeString()})
//         }, 1000);
//     }

//     render() {
//         return (
//             <div className="time">
//                 The Time is: {this.state.time}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Clock />,
//     document.querySelector('#root2')
// );
