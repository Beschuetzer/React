import axios from 'axios';

const KEY = "AIzaSyDENC7089qKE95tvA4vQPJi5yGia1-seqA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
    }
})