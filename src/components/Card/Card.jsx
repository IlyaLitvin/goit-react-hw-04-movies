import React from "react";
import PropTypes from "prop-types";

const Card = ({
  id,
  poster_path,
  release_date,
  genres,
  title,
  overview,
  popularity,
}) => {
  let img =
    "https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg";
  {
    poster_path === null
      ? (poster_path = img)
      : (poster_path = `https://image.tmdb.org/t/p/w300${poster_path}`);
  }
  return (
    <div key={id} className="container">
      <div>
        <img src={poster_path} alt={title} className="ImageGalleryItem-image" />
      </div>
      <div>
        <h2>
          {title}
          <span>({(release_date = new Date(release_date).getFullYear())})</span>
        </h2>
        <h3>Overview</h3>
        <h3>Popularity: {popularity}%</h3>
        <p>{!overview && "No review yet"}</p>
        <h3>Genres:</h3>
        <ul>
          {genres.map((el) => (
            <li key={el.id}>
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
        <h2>Additional infomation</h2>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Card;
