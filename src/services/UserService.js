import axios from 'axios';
import authHeader from './AuthHeader';

const USER_API_BASE_URL = process.env.REACT_APP_API_BASE_URL + 'user/';

class UserService {

    getUserMarks() {
        return axios.get(USER_API_BASE_URL + 'marks', { headers: authHeader() });
    }

    markMovieForCurrentUser(request) {
        return axios.post(USER_API_BASE_URL + 'marks', request, { headers: authHeader() });
    }

    unmarkMovieForCurrentUser(id) {
        return axios.delete(USER_API_BASE_URL + `marks/${id}`, { headers: authHeader() });
    }
}

export default new UserService()
