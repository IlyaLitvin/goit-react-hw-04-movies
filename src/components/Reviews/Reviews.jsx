import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const res = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/reviews?api_key=401d61f37c17d956a98039a1a0734109&language=en-US&page=1`
    );
    this.setState({ reviews: res.data.results });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length > 0 ? (
            reviews.map((el) => (
              <li key={el.id}>
                <h2>{el.author}</h2>
                <p>{el.content}</p>
              </li>
            ))
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}

Reviews.propTypes = {
  actores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
