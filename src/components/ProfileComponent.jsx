import React, { Component } from 'react';
import AuthService from '../services/AuthService';

class ProfileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className = 'container'>
                <h3>{currentUser.username}</h3>
            </div>
        )
    }
}

export default ProfileComponent;
