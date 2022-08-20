import React, { Component } from 'react';
import {BrowserRouter as Link, Router } from 'react-router-dom';
import StickyHeader from 'react-sticky-header';
import {useHistory} from "react-router-dom";
import 'react-sticky-header/styles.css';
import { createBrowserHistory } from 'history';
import AuthService from '../services/AuthService';

const HeaderComponent = (props) => {
    let keyword = '';
    let currentUser = AuthService.getCurrentUser();
    let history = useHistory();
    console.log(JSON.stringify(currentUser));


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
                            <nav className = 'navbar navbar-expand-md navbar-dark navbar-custom d-flex justify-content-between flex-column flex-md-row p-3'>
                            <div>
                                <a href = '/' className = 'navbar-brand'>Aosandy Movie Catalog</a>
                            </div>
                            <form className='form-inline' onSubmit={search}>
                                <input
                                    className='search '
                                    required
                                    placeholder="Найти фильм..."
                                    type="text"
                                    onChange={inputHandler}
                                />
                                
                            </form>
                                {currentUser ? (
                                    <div className='navbar-nav ml-auto'>
                                        <li className='nav-item'>
                                            <a href="/saved">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bookmark_icon_white.svg/1200px-Bookmark_icon_white.svg.png"
                                                    alt="profile-img"
                                                    className="nav-link header-icon"
                                                />
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <div className='dropdown'>
                                                <img
                                                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                                    alt="profile-img"
                                                    class="header-icon dropdown-toggle"
                                                    type="button" id="dropdownMenuUser"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                />
                                                <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuUser">
                                                    <li><a class="dropdown-item" href='/'>
                                                        {currentUser.username}
                                                        <br/>
                                                        Настройки
                                                    </a></li>
                                                    <li><hr class="dropdown-divider"/></li>
                                                    <li><a class="dropdown-item" href='/' onClick={logout}>Выход</a></li>
                                                </ul>
                                            </div>
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

export default HeaderComponent;
