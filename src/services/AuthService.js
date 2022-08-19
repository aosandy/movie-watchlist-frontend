import axios from 'axios';

const AUTH_API_BASE_URL = process.env.API_BASE_URL + 'auth/';

class AuthService {

    register(registrationRequest) {
        return axios.post(AUTH_API_BASE_URL + 'reg', registrationRequest);
    }

    login(loginRequest) {
        return axios.post(AUTH_API_BASE_URL + 'login', loginRequest).then(res => {
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
