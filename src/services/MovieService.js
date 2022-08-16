import axios from 'axios';

<<<<<<< HEAD
const API_BASE_URL_LOCAL = 'http://localhost:8080/films/';
=======
const API_BASE_URL_LOCAL = 'http://localhost:8080/';
>>>>>>> aad94672f785be63e5394d2cd83d4d946834bc64

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
