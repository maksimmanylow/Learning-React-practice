import C from './constants';

const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
});

export default rateColor;
