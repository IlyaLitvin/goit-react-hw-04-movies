import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`
    );
    this.setState({ actors: response.data.cast });
  }

  render() {
    return (
      <ul>
        {this.state.actors ? (
          this.state.actors.map((e) => (
            <li key={e.cast_id}>
              <div>
                <img
                  src={
                    e.profile_path
                      ? `https://image.tmdb.org/t/p/w300${e.profile_path}`
                      : "https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg"
                  }
                  alt=""
                />
              </div>
              <h2>{e.name}</h2>
              <p>character: {e.character}</p>
            </li>
          ))
        ) : (
          <p>Ooops, there is nothing yeat</p>
        )}
      </ul>
    );
  }
}

Cast.propTypes = {
  actores: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
