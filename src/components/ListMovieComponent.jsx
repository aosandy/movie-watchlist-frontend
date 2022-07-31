import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class ListMovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
        this.viewMovie = this.viewMovie.bind(this);
    }

    componentDidMount() {
        MovieService.getPremieres().then((res) => {
            this.setState({ movies: res.data});
        });
    }

    viewMovie(id){
        this.props.history.push(`/${id}`);
    }

    render() {
        const movies = this.state.movies.map((movie) => 
            <li key = {movie.id} className = 'zoom' onClick={ () => this.viewMovie(movie.id)}>
                <img src={movie.posterUrlPreview}/> 
                <h2>{movie.name}</h2>
            </li>
        );

        return (
            <div className = 'movies'>
                {movies}
            </div>
        )
    }
}

export default ListMovieComponent;