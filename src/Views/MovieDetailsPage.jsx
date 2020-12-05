import React, { Component } from "react";
import Axios from "axios";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import Card from "../components/Card";
import routes from "../routes.js";

export default class MovieDetailsPage extends Component {
  state = {
    page: null,
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`
    );
    this.setState({ page: response.data });
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.HomePage);
  };

  render() {
    const { page } = this.state;
    return (
      <>
        {page && (
          <>
            <div>
              <button
                type="button"
                onClick={this.handleGoBack}
                className="Button"
              >
                Go back
              </button>
            </div>
            <Card {...page} />
            <div>
              <ul>
                <li>
                  <NavLink
                    to={`${this.props.match.url}/Cast`}
                    className="Button"
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`${this.props.match.url}/Reviews`}
                    className="Button"
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>

              <Switch>
                <Route
                  exact
                  path={`${this.props.match.path}/Cast`}
                  render={(props) => (
                    <Cast {...props} id={this.state.page.id} />
                  )}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/Reviews`}
                  render={(props) => (
                    <Reviews {...props} id={this.state.page.id} />
                  )}
                />
              </Switch>
            </div>
          </>
        )}
      </>
    );
  }
}
