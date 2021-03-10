import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';
import Song from './Song';

class SongList extends React.Component {
    renderSongList() {
        return this.props.songs.map((song, index) => {
            return (
                <Song selectedSong={this.props.selectedSong} key={index} song={song} selectSong={this.props.selectSong}/>
            );
        })
    }

    render() {
        return (
            <div className="song-list">{this.renderSongList()}</div>
        );
    }
}

//This fn takes the state properties and maps them to this component's this.props object (e.g. below takes state.songs and maps it to this.props.songs)
//key = this.props.key
//value = this.props.key value
const mapStateToProps = state => {
    console.log('state =', state);
    return { 
        songs: state.songs,
        selectedSong: state.selectedSong,
    };
}

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);