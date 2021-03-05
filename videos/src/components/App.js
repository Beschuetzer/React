import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoItem from './VideoItem';
import VideoList from './VideoList';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
        }
    }
    onSearchSubmit = async (searchQuery) => {
        try {
            const results = await youtube.get(`/search`, {
                params: {
                    q: searchQuery,
                }
            });
            console.log('results =', results);
            this.setState({videos: results.data.items})
        } catch (error) {
            console.log('error =', error);
        }
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
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="video-grid">
                    <VideoDetail/>
                    <VideoList videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}