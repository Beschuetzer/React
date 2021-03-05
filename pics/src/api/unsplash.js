import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID v2St8noHReHIJYrKEp25B9DhyBDbDYY4OHQzt14RYxk',
    },
});