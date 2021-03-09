import {useEffect, useState} from 'react';
import youtube from '../apis/youtube';

const useVideo = ({defaultSearchTerm}) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (searchQuery) => {
        try {
            const results = await youtube.get(`/search`, {
                params: {
                    q: searchQuery,
                }
            });
            setVideos(results.data.items);
        } catch (error) {
            console.log('error =', error);
        }
    }
    return [videos, search];
}

export default useVideo;