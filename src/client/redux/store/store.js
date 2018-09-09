import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import colors from '../reducers/colors';
import sort from '../reducers/sort';

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
