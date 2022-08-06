import axios from 'axios';

const API_BASE_URL_LOCAL = 'http://localhost:8080/';

class MovieService {

    getUserBoard() {
        return axios.get(API_BASE_URL_LOCAL + 'user');
    }
}

export default new MovieService()
