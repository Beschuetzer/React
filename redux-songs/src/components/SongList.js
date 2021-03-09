import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {
    render() {
        const songsRendered = this.props.songs.map((song, index) => {
            return (
                <div key={index} className="song-item">
                    <div className="song-item__info">
                        <div className="song-item__title">{song.title}</div>
                        <div className="song-item__artist">by {song.artist}</div>

                    </div>
                    <button className="song-item__select"><div>Select</div></button>
                </div>
            );
        })
        return (
            <div className="song-list">{songsRendered}</div>
        );
    }
}

//This fn takes the state properties and maps them to this component's this.props object (e.g. below takes state.songs and maps it to this.props.songs)
//key = this.props.key
//value = this.props.key value
const mapStateToProps = state => {
    return { 
        songs: state.songs,
    };
}

export default connect(mapStateToProps)(SongList);