import React from 'react';
import { render } from 'react-dom';
import 'bootstrap'; // Import Bootstrap’s JavaScript
import 'popper.js'; // Import Bootstrap’s dependencies
import 'jquery'; // Import Bootstrap’s dependencies
import './static/scss/main.scss';

import App from './components/colorManager/App';

window.React = React;

render(<App />, document.getElementById('root'));
