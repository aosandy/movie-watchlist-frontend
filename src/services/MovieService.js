import axios from 'axios';

const API_BASE_URL_LOCAL = 'http://localhost:8080/';
const API_BASE_URL = 'https://java-mega-market.herokuapp.com/offers';

class MovieService {

    getPremieres() {
        return axios.get(API_BASE_URL_LOCAL + 'premieres');
    }

    getMovieById(id) {
        return axios.get(API_BASE_URL_LOCAL + id);
    }
}

export default new MovieService()
