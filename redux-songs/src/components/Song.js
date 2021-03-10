import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

const Song = ({song, selectSong}) => {
    return (
        <div className="song-item">
            <div className="song-item__info">
                <div className="song-item__title">{song.title}</div>
                <div className="song-item__artist">by {song.artist}</div>

            </div>
            <button 
                onClick={() => selectSong(song)}
                className="song-item__select"
            >
                <div>Select</div>
            </button>
        </div>
    );
}

//This fn takes the state properties and maps them to this component's this.props object (e.g. below takes state.songs and maps it to this.props.songs)
//key = this.props.key
//value = this.props.key value
const mapStateToProps = state => {
    console.log('state =', state);
    return { 
        songs: state.songs,
    };
}

export default connect(mapStateToProps, {
    selectSong: selectSong
})(Song);