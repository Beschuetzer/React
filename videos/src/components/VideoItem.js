import React from 'react';
import './css/VideoItem.css';

// export default class VideoItem extends React.Component {
//     constructor() {
//         super();
//         this.state = {
         
//         };
//         this.divRef = React.createRef();
//     }
//     onVideoSelectLocal = (e) => {
//         this.props.onVideoSelect(this.divRef.current.dataset.id)
//     }
//     render() {
//         console.log('this.props.video.id.videoId =', this.props.video.id.videoId);
//         return (
//             <div className="item video-item" onClick={this.onVideoSelectLocal} data-id={this.props.video.id.videoId} ref={this.divRef}>
//                 {/* <i className="large github middle aligned icon"></i> */}
//                 <img src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description}/>

//                 <div className="content">
//                     <h4 className="header">{this.props.video.snippet.title}</h4>
//                 </div>
//             </div>
//         );
//     }
// }

//or 

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            {/* <i className="large github middle aligned icon"></i> */}
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>

            <div className="content">
                <h4 className="header">{video.snippet.title}</h4>
            </div>
        </div>
    );
}

export default VideoItem;