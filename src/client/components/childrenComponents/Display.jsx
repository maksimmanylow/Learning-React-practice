import { Children } from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';

const Display = ({ ifTruthy = true, children }) => (ifTruthy ? Children.only(children) : null);
const age = 22;
render(
  <Display ifTruthy={age >= 21}>
    <h1>You can enter</h1>
  </Display>
);
