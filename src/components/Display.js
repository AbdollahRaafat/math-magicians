import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

function Display({ total, next, operation }) {
  return (
    <div id="Display">
      <span>{total}</span>
      <span>{operation}</span>
      <span>{next}</span>
    </div>
  );
}

Display.defaultProps = {
  total: '0',
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
