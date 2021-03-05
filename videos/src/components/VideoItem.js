import React from 'react';

export default class VideoItem extends React.Component {
    constructor() {
        super();
        this.state = {
         
        };
    }
    render() {
        console.log('this.props.video =', this.props.video);
        return (
            <div className="ui segment" >
                <div className="card">
                    <div className="image">
                        <img src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description}/>
                    </div>
                    <div className="content">
                        <div className="header">
                            {this.props.video.snippet.channelTitle}
                        </div>
                        <div className="description">
                            {this.props.video.snippet.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}