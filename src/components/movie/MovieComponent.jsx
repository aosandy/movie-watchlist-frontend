import React, { Component } from 'react';
import { TextInput, Button } from 'react-native';
import MovieService from '../../services/MovieService';
import UserService from '../../services/UserService';
import AuthService from '../../services/AuthService';
    
class MovieComponent extends Component {
    constructor(props) {
        super(props)
        this.markMovie = this.markMovie.bind(this);
        this.unmarkMovie = this.unmarkMovie.bind(this);

        this.state = {
            id: this.props.match.params.id,
            isMarked: false,
            isAuth: false,
            movie: {}
        }
    }

    componentDidMount() {
        MovieService.getMovieById(this.state.id).then((res) => {
            this.setState({movie: res.data});
        });

        UserService.getUserMarks().then((res) => {
            if (res.data.filter(e => e.id == this.state.id).length > 0) {
                this.setState({isMarked: true});
            }
        })
        this.setState({isAuth: AuthService.getCurrentUser() != null});
    }

    markMovie() {
        let request = {
            movieId: this.state.id,
            name: this.state.movie.name,
            posterUrlPreview: this.state.movie.posterUrl
        };

        UserService.markMovieForCurrentUser(request).then(() => {
            this.setState({isMarked: true});
        });
    }

    unmarkMovie() {
        UserService.unmarkMovieForCurrentUser(this.state.id).then(() => {
            this.setState({isMarked: false});
        });
    }

    render() {
        return (
            <div className = "container">
                <div className = 'movie'>
                    <img src={this.state.movie.posterUrl}/>
                </div>
                <div className = "movie-description">
                    <h2 className = "text-center"> { this.state.movie.name }</h2>
                    <p className = "text-justify">
                        { this.state.movie.description }
                    </p>
                    <div>
                    {this.state.isAuth && (
                        this.state.isMarked ? (
                            <button className='btn btn-danger zoom' onClick={this.unmarkMovie}>
                                Убрать из закладок
                            </button>
                        ) : (
                            <button className='btn btn-success zoom' onClick={this.markMovie}>
                                Добавить в закладки
                            </button>
                        )
                    )}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieComponent;
