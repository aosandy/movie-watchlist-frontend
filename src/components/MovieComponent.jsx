import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class MovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            movie: {}
        }
    }

    componentDidMount() {
        MovieService.getMovieById(this.state.id).then((res) => {
            this.setState({movie: res.data});
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
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieComponent;