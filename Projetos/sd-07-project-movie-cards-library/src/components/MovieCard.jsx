import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    // const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    // Outra forma de fazer ensinado pelo Pablo Pessanha
    return (
      <div>
        <img src={imagePath} alt="" />;
        <h4>{title}</h4>;
        <h5>{subtitle}</h5>;
        <p>{storyline}</p>;
        <span><Rating rating={rating} /></span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
