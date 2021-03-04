import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errMsg: '',
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('position =', position);
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errMsg: err.message});
            }
        )
    }
    render() {
        if (this.state.errMsg && !this.state.lat) {
            return (
                <div>Error: {this.state.errMsg}</div>
            );
        }
        else if (this.state.lat) {
            return (
                <SeasonDisplay>{this.state.lat}{this.state.errMsg}</SeasonDisplay>
            );
        }
        else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

export default App;