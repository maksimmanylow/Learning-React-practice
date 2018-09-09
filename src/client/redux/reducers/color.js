import C from './constants';

const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0
      };
    case C.RATE_COLOR:
      return state.id !== action.id
        ? state
        : {
            ...state,
            rating: action.rating
          };
    default:
      return state;
  }
};

export default color;

/*
const action = {
  type: 'RATE_COLOR',
  id: '128e1p5-3abl-0e52-33p0-8401l8yf3036',
  rating: 4
};

const existingColor = {
  id: '128e1p5-3abl-0e52-33p0-8401l8yf3036',
  title: 'Big Blue',
  color: '#0000FF',
  timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
  rating: 0
};

console.log(color(existingColor, action));
*/
