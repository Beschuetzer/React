import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar></SearchBar>
                <ImageList></ImageList>
            </div>

        );
    }
}