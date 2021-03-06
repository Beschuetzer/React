import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import './css/style.css';
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null,
        }
    }
    onVideoSelect = (video) => {
        console.log('video =', video);
        this.setState({
            selectedVideo: video,
        });
    }
    onSearchSubmit = async (searchQuery) => {
        try {
            const results = await youtube.get(`/search`, {
                params: {
                    q: searchQuery,
                }
            });
            console.log('results =', results);
            this.setState({
                videos: results.data.items,
                selectedVideo: results.data.items[0],
            })
        } catch (error) {
            console.log('error =', error);
        }
    }
    componentDidMount = () => {
        //called once when component finishes rendering initially
        this.onSearchSubmit('my app');
    }
    componentDidUpdate = () => {
        //called everytime  a component updates itself
    }
    render() {
        return (
            <div className="grid">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="video-grid">
                    <VideoDetail selectedVideo={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </div>
            </div>
        );
    }
}