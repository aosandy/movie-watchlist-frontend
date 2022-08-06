import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class RegistrationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (event) => {

        event.preventDefault();
    
        var { username, email, password } = document.forms[0];

        var registrationRequest = {
            username: username.value,
            email: email.value,
            password: password.value
        };

        AuthService.register(registrationRequest).then(() => {
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
                        <label>Email </label>
                        <input type="email" name="email" required />
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
