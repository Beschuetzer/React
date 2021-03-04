import React from 'react';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = {
        lat: null,
        errMsg: '',
    }
    renderContent() {
        if (this.state.errMsg && !this.state.lat) {
            return (
                <div>Error: {this.state.errMsg}</div>
            );
        }
        else if (this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
            );
        }
        else {
            return (
                <Spinner message="Waiting for Response"></Spinner>
            );
        }
    }
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
    componentDidMount(){
        console.log('Rendered to Screen------------------------------------------------');
        this.getClientLocation();
    }
    componentDidUpdate() {
        console.log('component updated------------------------------------------------');
    }
    componentWillUnmount() {
        //called when a component is removed from the screen;  good place for cleanup (especially for non-React code)
        console.log('test------------------------------------------------'); 
    }
    getClientLocation() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),    
            err => this.setState({errMsg: err.message})
        )
    }
}

export default App;