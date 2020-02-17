import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {lat: null, long: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (GeolocationPosition) => {
                this.setState(
                    {
                        lat: GeolocationPosition.coords.latitude,
                        long: GeolocationPosition.coords.longitude
                    }
                )
            },
            (err) => {
                this.setState(
                    {
                        errorMessage: err.message
                    }
                )
            }
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
            return <div className="ui green message">Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

