import axios from 'axios';
import authHeader from './AuthHeader';

const API_BASE_URL_LOCAL = 'http://localhost:8080/user/';

class UserService {

    getUserMarks() {
        return axios.get(API_BASE_URL_LOCAL + 'marks', { headers: authHeader() });
    }

    markMovieForCurrentUser(request) {
        return axios.post(API_BASE_URL_LOCAL + 'marks', request, { headers: authHeader() });
    }

    unmarkMovieForCurrentUser(id) {
        return axios.delete(API_BASE_URL_LOCAL + `marks/${id}`, { headers: authHeader() });
    }
}

export default new UserService()
