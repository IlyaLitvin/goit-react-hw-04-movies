import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=401d61f37c17d956a98039a1a0734109"
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <ul>
          <h1>Tranding today</h1>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}movies/${movie.id}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
