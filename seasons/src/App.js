import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('position =', position);
                this.setState({lat: position.coords.latitude});
            },
            err => {
                console.log('err =', err);
            }
        )
    }
    render() {
        return (
            <div>{this.state.lat}</div>
        );
    }
}

export default App;