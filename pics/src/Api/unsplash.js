import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID phettcQnlkFHs-QgKFNWd4CgEpNjizTYJNZyGt8JHbo'
    }
});