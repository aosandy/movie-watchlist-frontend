import React, { Component } from 'react';
import UserService from '../../services/UserService';

class SavedMoviesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        UserService.getUserMarks().then((res) => {
            this.setState({ movies: res.data});
        });
    }

    viewMovie(id){
        this.props.history.push(`/films/${id}`);
    }

    render() {
        const movies = this.state.movies.map((movie) => 
            <li key = {movie.id} className = 'zoom' onClick={ () => this.viewMovie(movie.id)}>
                <img src={movie.posterUrlPreview}/> 
                <h2>{movie.name}</h2>
            </li>
        );

        return (
            <div>
                <div className = 'movies'>
                    {movies}
                </div>
            </div>
        )
    }
}

export default SavedMoviesComponent;
