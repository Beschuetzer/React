import React from 'react';
import VideoItem from './VideoItem';

export default class VideoList extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    render() {
        const renderedVideos = this.props.videos.map((video) => {
            return (
                <VideoItem key={video.id.videoId} video={video}/>
            );
        })



        return (
            // {renderedVideos}
            <div>
                {renderedVideos}
            </div>
        );
    }
}