import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class RegistrationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                accessToken: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { username, password } = document.forms[0];

        var loginRequest = {
            username: username.value,
            password: password.value
        };

        AuthService.login(loginRequest).then(() => {
            this.props.history.push('/');
            window.location.reload();
        });
      }

    render() {

        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="username" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationComponent;
