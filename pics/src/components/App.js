import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

console.log(process.env.UNSPLASH_ACCESS);

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    onSearchSubmit = async (term) => {
        console.log('term =', term);
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                headers: {
                    Authorization: 'Client-ID v2St8noHReHIJYrKEp25B9DhyBDbDYY4OHQzt14RYxk',
                },
                params: {
                    query: term,
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: "1rem" }}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                <ImageList></ImageList>
            </div>

        );
    }
}