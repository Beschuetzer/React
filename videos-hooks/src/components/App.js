import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import {useState, useEffect} from 'react';

import './css/style.css';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSearchSubmit = async (searchQuery) => {
        try {
            const results = await youtube.get(`/search`, {
                params: {
                    q: searchQuery,
                }
            });
            setVideos(results.data.items);
            setSelectedVideo(results.data.items[0]);
        } catch (error) {
            console.log('error =', error);
        }
    }

    useEffect(() => {
        onSearchSubmit('Welcome');
    }, [])

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