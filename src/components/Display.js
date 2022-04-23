import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

function Display({ solution }) {
  return (
    <div id="Display"><h3>{solution}</h3></div>
  );
}

Display.defaultProps = { solution: '0' };
Display.propTypes = {
  solution: PropTypes.string,
};

export default Display;
