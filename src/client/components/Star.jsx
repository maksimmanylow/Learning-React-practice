import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ selected=false, onClick=f=>f }) => (
  <div className={(selected) ? "star selected": "star"}
    onClick={onClick}>
  </div>
);

Star.porpTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Star;
