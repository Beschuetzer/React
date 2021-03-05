import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

console.log(process.env.UNSPLASH_ACCESS);

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            images: [],
        };
    }
    onSearchSubmit = async (term) => {
        console.log('term =', term);
        try {
            const response = await unsplash.get('/search/photos', {
                params: {query: term}
            });
            this.setState({images: response.data.results})
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: "1rem" }}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}></ImageList>
            </div>

        );
    }
}