import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'bootstrap';// Import Bootstrap’s JavaScript
import 'popper.js';// Import Bootstrap’s dependencies
import 'jquery';// Import Bootstrap’s dependencies
import './static/scss/main.scss';

window.React = React;

render(
  <App />,
  document.getElementById('root'),
);
