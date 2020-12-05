import React, { Component } from "react";
import Search from "../components/Search";
import Axios from "axios";
import { Link } from "react-router-dom";
import queryString from "query-string";

export default class MoviesPage extends Component {
  state = {
    shows: [],
    query: "",
    totalResults: 0,
    error: false,
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
    this.setState({
      query: query,
    });
  };

  async componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      try {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${query}&page=1&language=en-US&page=1&include_adult=false`
        );
        this.setState({
          totalResults: response.data.total_results,
          shows: response.data.results,
        });
      } catch {
        this.setState({ error: true });
      }
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      try {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${this.state.query}&page=1&language=en-US&page=1&include_adult=false`
        );
        this.setState({
          totalResults: response.data.total_results,
          shows: response.data.results,
        });
      } catch {
        this.setState({ error: true });
      }
    }
  }

  render() {
    const { totalResults, query, error } = this.state;

    return (
      <>
        <Search handleChangeQuery={this.handleChangeQuery} />
        {totalResults > 1 ? (
          <ul>
            {this.state.shows.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${this.props.match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.name || movie.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          (query !== "" || error) && <h3>Nothing found for your request</h3>
        )}
      </>
    );
  }
}
