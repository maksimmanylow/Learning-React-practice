import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import colors from '../reducers/colors';
import sort from '../reducers/sort';
import rateColor from '../actions/rateColor';
import removeColor from '../actions/removeColor';
import sortColors from '../actions/sortColors';
import addColor from '../actions/addColor';

const store = createStore(
  combineReducers({ colors, sort }),
  localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}
);

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState());
});

console.log('current color count', store.getState().colors.length);
console.log('current state', store.getState());

store.dispatch({
  type: 'ADD_COLOR',
  id: uuid.v4(),
  title: 'Party Pink',
  color: '#F142FF',
  timestamp: new Date().toString()
});

store.dispatch(removeColor('3315e1p5-3abl-0p523-30e4-8001l8yf2412'));
store.dispatch(rateColor('441e0p2-9ab4-0p523-30e4-8001l8yf2412', 5));
store.dispatch(sortColors('title'));
store.dispatch(addColor('#F142FF', 'Party Pink'));
