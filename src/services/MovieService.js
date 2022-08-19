import axios from 'axios';

const FILMS_API_BASE_URL = process.env.API_BASE_URL + 'films/';

class MovieService {

    getPremieres() {
        console.log(FILMS_API_BASE_URL);
        return axios.get(FILMS_API_BASE_URL + 'premieres');
    }

    getMovieById(id) {
        return axios.get(FILMS_API_BASE_URL + id);
    }

    getMoviesByKeyword(keyword) {
        return axios.get(FILMS_API_BASE_URL + 'search', { params: { keyword: keyword } });
    }
}

export default new MovieService()
