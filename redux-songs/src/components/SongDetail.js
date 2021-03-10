import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({selectedSong}) => {
    console.log('selectedSong =', selectedSong);
    if (selectedSong) {
        return (        
            <div className="song-detail">
                <h3>Now Playing:</h3>
                <h4 className="song-detail__title">{selectedSong.title}</h4>
                <h5 className="song-detail__artist">{selectedSong.artist}</h5>
                <h4 className="song-detail__duration">{selectedSong.duration}</h4>
            </div>
        );
    }
    else {
        return (        
            <div className="song-detail song-detail--nullMsg">
                Select a Song
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedSong: state.selectedSong,
    }
}

export default connect(mapStateToProps)(SongDetail);