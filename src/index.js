import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {lat: null, long: null};

        window.navigator.geolocation.getCurrentPosition(
            (GeolocationPosition) => {
                this.setState(
                    {
                        lat: GeolocationPosition.coords.latitude,
                        long: GeolocationPosition.coords.longitude
                    }
                )
            },
            (err) => console.log(err)
        );
    }

    render() {

        return <div>
            <span>Latitude: {this.state.lat}</span><br/>
            <span>Longitude: {this.state.long}</span>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

