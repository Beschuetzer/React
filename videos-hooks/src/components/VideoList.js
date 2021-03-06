import React from 'react';
import VideoItem from './VideoItem';

// export default class VideoList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
            
//         };
//     }
//     render() {
//         const renderedVideos = this.props.videos.map((video) => {
//             return (
//                 <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect}/>
//             );
//         })

//         return (
//             // {renderedVideos}
//             <div className="ui divided relaxed list video-list">
//                 {renderedVideos}
//             </div>
//         );
//     }
// }


//or 

const VideoList = ({videos, onVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return (
            <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
        );
    })

    return (
        // {renderedVideos}
        <div className="video-list">
            {renderedVideos}
        </div>
    );
}

export default VideoList;