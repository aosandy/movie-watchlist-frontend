import React, { Component } from 'react';
import UserService from '../../services/UserService';

class SavedMoviesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: '',
            movies: []
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.search = this.search.bind(this);

    }

    componentDidMount() {
        UserService.getUserMarks().then((res) => {
            console.log(JSON.stringify(res.data));
            this.setState({ movies: res.data});
        });
        console.log(JSON.stringify(this.movies));
    }

    viewMovie(id){
        this.props.history.push(`/films/${id}`);
    }

    inputHandler = (event) => {
        this.setState({keyword: event.target.value.toLowerCase()});
    }

    search() {
        this.props.history.push({
            pathname: '/films/search',
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
                <form action="" onSubmit={this.search}>
                    <input
                        required
                        placeholder="Найти фильм..."
                        type="text"
                        onChange={this.inputHandler}
                    />
                    <button type='submit'>Найти</button>
                </form>

                <div className = 'movies'>
                    {movies}
                </div>
            </div>
        )
    }
}

export default SavedMoviesComponent;