import C from './constants';
import color from './color';

const colors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return [...state, color({}, action)];
    case C.RATE_COLOR:
      return state.map(c => color(c, action));
    case C.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};

export default colors;
/*
const currentColors = [
  {
    id: '9813e2p4-3abl-2e44-95p4-8001l8yf3036',
    title: 'Berry Blue',
    color: '#000066',
    rating: 0,
    timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)'
  }
];
const action = {
  type: 'ADD_COLOR',
  id: '5523e7p8-3ab2-1e35-95p4-8001l8yf3036',
  title: 'Party Pink',
  color: '#F142FF',
  timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)'
};
console.log(colors(currentColors, action));
*/
