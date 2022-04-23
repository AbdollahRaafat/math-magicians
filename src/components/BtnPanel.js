import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/BtnPanel.css';

const BtnPanel = ({ clickHandler }) => {
  const btns = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <div className="panel" id="btnPanel">
      {btns.map((line, num) => (
        <div className="rows" id={`rows${num + 1}`} key={line}>
          {line.map((btn) => (
            (btn === '0') ? <Button key={btn} btnName={btn} clickHandler={handleClick} wide /> : <Button key={btn} btnName={btn} clickHandler={handleClick} />
          ))}
        </div>
      ))}
    </div>
  );
};

BtnPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default BtnPanel;
