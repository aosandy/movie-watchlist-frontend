import React, { Component } from 'react';
import MovieService from '../../services/MovieService';
import UserService from '../../services/UserService';

class MovieComponent extends Component {
    constructor(props) {
        super(props)
        this.markMovie = this.markMovie.bind(this);
        this.unmarkMovie = this.unmarkMovie.bind(this);

        this.state = {
            id: this.props.match.params.id,
            isMarked: false,
            movie: {}
        }
    }

    componentDidMount() {
        MovieService.getMovieById(this.state.id).then((res) => {
            this.setState({movie: res.data});
        });

        UserService.getUserMarks().then((res) => {
            console.log(JSON.stringify(res.data));

            if (res.data.filter(e => e.id == this.state.id).length > 0) {
                this.setState({isMarked: true});
            }
        })
    }

    markMovie() {
        let request = {
            movieId: this.state.id,
            name: this.state.movie.name,
            posterUrlPreview: this.state.movie.posterUrl
        };

        UserService.markMovieForCurrentUser(request).then(() => {
            window.location.reload();
        });
    }

    unmarkMovie() {
        UserService.unmarkMovieForCurrentUser(this.state.id).then(() => {
            window.location.reload();
        });
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <div className = "card-body">
                        <div className = "row">
                            <h3 className = "text-center"> { this.state.movie.name }</h3>
                        </div>
                        <div className = "row">
                            <img src={this.state.movie.posterUrl}/>
                        </div>
                        {this.state.isMarked ? (
                            <button onClick={this.unmarkMovie}>
                                Убрать из закладок
                            </button>
                        ) : (
                            <button onClick={this.markMovie}>
                                Добавить в закладки
                            </button>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieComponent;
