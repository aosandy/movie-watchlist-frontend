import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import axios from 'axios';

class ProfileComponent extends Component {
    constructor(props) {
        super(props)
        this.checkUsername = this.checkUsername.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    checkUsername() {
        var username = axios.get('http://localhost:8080/auth/username');
        console.log(JSON.stringify(username));
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className = 'container'>
                <h3>{currentUser.username}</h3>
                <button onClick={this.checkUsername}></button>
            </div>
        )
    }
}

export default ProfileComponent;
