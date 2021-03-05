import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoItem from './VideoItem';
import VideoList from './VideoList';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    onFormSubmit = (searchQuery) => {
        console.log('searchQuery =', searchQuery);
    }
    componentDidMount = () => {
        //called once when component finishes rendering initially
    }
    componentDidUpdate = () => {
        //called everytime  a component updates itself
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: "1rem"}}>
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                
            </div>
        );
    }
}