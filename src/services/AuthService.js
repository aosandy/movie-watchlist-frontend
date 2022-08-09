import axios from 'axios';

const API_BASE_URL_LOCAL = 'http://localhost:8080/auth/';

class AuthService {

    register(registrationRequest) {
        return axios.post(API_BASE_URL_LOCAL + 'reg', registrationRequest);
    }

    login(loginRequest) {
        return axios.post(API_BASE_URL_LOCAL + 'login', loginRequest).then(res => {
            if (res.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(res.data));
            }

            return res.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService()
