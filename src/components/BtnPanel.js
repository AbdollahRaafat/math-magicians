import React from 'react';
import Button from './Button';
import '../styles/BtnPanel.css';

const BtnPanel = () => {
  const btns = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="panel" id="btnPanel">
      {btns.map((line, num) => (
        <div className="rows" id={`rows${num + 1}`} key={line}>
          {line.map((btn) => (
            (btn === '0') ? <Button key={btn} btnName={btn} wide /> : <Button key={btn} btnName={btn} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BtnPanel;
