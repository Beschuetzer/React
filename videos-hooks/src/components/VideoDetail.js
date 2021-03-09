import React from 'react';
import './css/style.css';

// export default class VideoDetail extends React.Component {
//     constructor() {
//         super();
//         this.state = {
            
//         };
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.selectedVideo}
//             </div>
//         );
//     }
// }


//or

const VideoDetail = ({selectedVideo: video}) => {
    if (!video) {
        return (
            <div className="video-detail">
                Loading
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-detail">
            <div className="video-detail__video">
                <iframe title='video-player' className="video-detail__iframe" src={videoSrc}></iframe>
            </div>
            <div className='video-detail__textbox'>
                <h4 className="video-detail__header">
                    {video.snippet.title}
                </h4>
                <p className="video-detail__description">
                    {video.snippet.description}
                </p>
            </div>
           
        </div>
    );
}

export default VideoDetail;