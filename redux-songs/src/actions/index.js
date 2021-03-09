export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song,
    }
}
export const makeHappy = (currentHappiness) => {
    return {
        type: 'MAKE_HAPPY',
        payload: currentHappiness,
    }
}
