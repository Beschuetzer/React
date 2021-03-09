import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import {useState, useEffect} from 'react';
import useVideo from '../hooks/useVideo';

import './css/style.css';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, onSearchSubmit] = useVideo("Welcome");

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])
   
    return (
        <div className="grid">
            <SearchBar onSearchSubmit={onSearchSubmit}/>
            <div className="video-grid">
                <VideoDetail selectedVideo={selectedVideo}/>
                <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
            </div>
        </div>
    );
}

export default App;