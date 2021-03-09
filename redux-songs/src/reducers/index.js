import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Who Could have Known?',
            artist: 'Michael Jackson',
            duration: '4:20',
        },
        {
            title: 'Macarena',
            artist: 'Somebody Famous',
            duration: '2:30',
        },
        {
            title: 'All Start',
            artist: 'Somebody Else',
            duration: '3:14',
        },
        {
            title: 'Bye Bye Bye',
            artist: 'Nsync',
            duration: '3:33',
        },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') return action.payload;
    else return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})
