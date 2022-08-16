import React, { Component } from 'react';
import MovieService from '../../services/MovieService';

class ListMovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: '',
            movies: []
        }
<<<<<<< HEAD:src/components/movie/ListMovieComponent.jsx
=======
        this.inputHandler = this.inputHandler.bind(this);
        this.search = this.search.bind(this);

>>>>>>> aad94672f785be63e5394d2cd83d4d946834bc64:src/components/ListMovieComponent.jsx
    }

    componentDidMount() {
        MovieService.getPremieres().then((res) => {
            this.setState({ movies: res.data});
        });
    }

    viewMovie(id) {
        this.props.history.push(`/films/${id}`);
    }

    inputHandler = (event) => {
        this.setState({keyword: event.target.value.toLowerCase()});
    }

    search() {
        this.props.history.push({
            pathname: '/search',
            search: '?keyword=' + this.state.keyword
          })
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
<<<<<<< HEAD:src/components/movie/ListMovieComponent.jsx
=======
                <form action="" onSubmit={this.search}>
                    <input
                        required
                        placeholder="Найти фильм..."
                        type="text"
                        onChange={this.inputHandler}
                    />
                    <button type='submit'>Найти</button>
                </form>

>>>>>>> aad94672f785be63e5394d2cd83d4d946834bc64:src/components/ListMovieComponent.jsx
                <div className = 'movies'>
                    {movies}
                </div>
            </div>
        )
    }
}

export default ListMovieComponent;
