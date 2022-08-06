import axios from 'axios';

const API_BASE_URL_LOCAL = 'http://localhost:8080/films/';

class MovieService {

    getPremieres() {
        return axios.get(API_BASE_URL_LOCAL + 'premieres');
    }

    getMovieById(id) {
        return axios.get(API_BASE_URL_LOCAL + id);
    }

    getMoviesByKeyword(keyword) {
        return axios.get(API_BASE_URL_LOCAL + 'search', { params: { keyword: keyword } });
    }
}

export default new MovieService()
