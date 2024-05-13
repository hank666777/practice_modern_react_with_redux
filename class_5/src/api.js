import axios from 'axios';

const searchImages = async (term) => {
    let response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID your access key'
        },
        params: {
            query: term
        }
    })
    return response.data.results;
}

export default searchImages;