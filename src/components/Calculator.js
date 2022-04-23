import { Component } from 'react';
import Display from './Display';
import BtnPanel from './BtnPanel';
import '../styles/index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <Display />
        <BtnPanel />
      </div>
    );
  }
}

export default Calculator;
