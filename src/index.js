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

    render() {

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
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

