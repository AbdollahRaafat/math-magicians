import { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import BtnPanel from './BtnPanel';
import '../styles/index.css';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (btnName) => {
    const sol = calculate({ total, next, operation }, btnName);
    setTotal(sol.total);
    setNext(sol.next);
    setOperation(sol.operation);
  };

  return (
    <div id="app">
      <Display total={total} next={next} operation={operation} />
      <BtnPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
