import React from 'react';
import {connect} from 'react-redux';
import Song from './Song';

const SongList = ({songs}) => {
    const renderSongList = () => {
        return songs.map((song, index) => {
            return (
                <Song key={index} song={song}/>
            );
        })
    }

    return (
        <div className="song-list">{renderSongList()}</div>
    );
}

// class SongList extends React.Component {
//     renderSongList() {
//         return this.props.songs.map((song, index) => {
//             return (
//                 <Song key={index} song={song}/>
//             );
//         })
//     }

//     render() {
//         console.log('this.props =', this.props);
//         return (
//             <div className="song-list">{this.renderSongList()}</div>
//         );
//     }
// }

//This fn takes the state properties and maps them to this component's this.props object (e.g. below takes state.songs and maps it to this.props.songs)
//key = this.props.key
//value = this.props.key value
const mapStateToProps = state => {
    console.log('state =', state);
    return { 
        songs: state.songs,
    };
}

export default connect(mapStateToProps)(SongList);