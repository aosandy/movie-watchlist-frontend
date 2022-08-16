import React, { Component } from 'react';
import {BrowserRouter as Link, Router } from 'react-router-dom';
import StickyHeader from 'react-sticky-header';
import {useHistory} from "react-router-dom";
import 'react-sticky-header/styles.css';
<<<<<<< HEAD
import { createBrowserHistory } from "history";
import AuthService from '../services/AuthService';

const HeaderComponent = (props) => {
    let keyword = '';
    let currentUser = AuthService.getCurrentUser();
    let history = useHistory();

    const logout = () => {
        AuthService.logout();
    };

    const inputHandler = (event) => {
        keyword = event.target.value.toLowerCase();
    };

    const search = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/films/search',
            search: '?keyword=' + keyword
        });
    };

    return (
        <div>
            <StickyHeader
                header = {                    
                    <div>   
                        <header>
                            <nav className = 'navbar navbar-expand-md navbar-dark bg-black d-flex justify-content-between flex-column flex-md-row p-3'>
                            <div>
                                <a href = '/' className = 'navbar-brand'>Aosandy Movie Catalog</a>
                            </div>
                            <form onSubmit={search}>
                                <input
                                    className='search'
                                    required
                                    placeholder="Найти фильм..."
                                    type="text"
                                    onChange={inputHandler}
                                />
                                
                            </form>
                                {currentUser ? (
                                    <div className='navbar-nav ml-auto'>
                                        <li className='nav-item'>
                                            <a href="/saved" className="nav-link">
                                                Закладки
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href="/profile" className="nav-link">
                                                {currentUser.username}
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href='/' className='nav-link' onClick={logout}>
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
=======
import {SearchField} from '@adobe/react-spectrum'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <StickyHeader
                    header = {                    
                        <div>   
                            <header>
                                <nav className = 'navbar navbar-expand-md navbar-dark bg-black'>
                                <div><a href = '/' className = 'navbar-brand'>Aosandy Movie Catalog</a></div>
                                </nav>
                            </header>
                        </div>}
                >
                </StickyHeader>
            </div>
        );
>>>>>>> aad94672f785be63e5394d2cd83d4d946834bc64
    }

export default HeaderComponent;
