import React, { Component } from 'react';
import {BrowserRouter as Link, Router } from 'react-router-dom';
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';
import AuthService from '../services/AuthService';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    logout() {
        AuthService.logout();
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div>
                <StickyHeader
                    header = {                    
                        <div>   
                            <header>
                                <nav className = 'navbar navbar-expand-md navbar-dark bg-black'>
                                <div><a href = '/' className = 'navbar-brand'>Aosandy Movie Catalog</a></div>


                                    {currentUser ? (
                                        <div className='navbar-nav ml-auto'>
                                            <li className='nav-item'>
                                                <a href="/profile" className="nav-link">
                                                    {currentUser.username}
                                                </a>
                                            </li>
                                            <li className='nav-item'>
                                                <a href='/login' className='nav-link' onClick={this.logout}>
                                                    Logout
                                                </a>
                                            </li>
                                        </div>
                                    ) : (
                                        <div className='navbar-nav ml-auto'>
                                            <li className="nav-item">
                                                <a href="/auth/login" className="nav-link">
                                                    Login
                                                </a>
                                            </li>

                                            <li className='nav-item'>
                                                <a href="/auth/reg" className="nav-link">
                                                    Sign Up
                                                </a>
                                            </li>
                                        </div>
                                    )}

                                </nav>
                            </header>
                        </div>
                    }
                >
                </StickyHeader>
            </div>
        );
    }
}

export default HeaderComponent;
