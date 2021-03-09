import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';
import {selectSong} from '../actions';

import '../css/style.css';

const App = () => {
    return (
        <React.Fragment>
            <SongList/>
            <SongDetail/>
        </React.Fragment>
    );
}

export default App;

