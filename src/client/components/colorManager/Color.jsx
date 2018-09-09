import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

class Color extends React.Component {
  componentWillMount() {
    this.style = { backgroundColor: '#ccc' };
  }

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;

    return rating !== nextProps.rating;
  }

  componentWillUpdate(nextProps) {
    const { title, rating } = this.props;
    this.style = { backgroundColor: 'red', color: 'white' };
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
  }

  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = rating > prevProps.rating ? 'better' : 'worse';
    this.style = { backgroundColor: '', color: 'black' };
  }

  render() {
    const { title, color, rating, totalStars, onRemove, onRate } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1>{title}</h1>
        <button type="submit" onClick={onRemove}>
          X
        </button>
        <div className="color" style={{ backgroundColor: color }} />
        <div>
          <StarRating starsSelected={rating} onRate={onRate} totalStars={totalStars} />
        </div>
      </section>
    );
  }
}

Color.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  rating: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
};

Color.defaultProps = {
  title: undefined,
  rating: 0,
  totalStars: 5,
  color: '#000',
  onRate: f => f,
  onRemove: f => f
};

export default Color;
