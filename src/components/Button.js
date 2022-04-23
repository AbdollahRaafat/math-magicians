import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  btnName, wide, color, clickHandler,
}) => {
  const color2 = 'lightGray';
  const borderCol = '#A0A0A0';

  const handleClick = () => clickHandler(btnName);

  const btnStyle = {
    width: wide ? '50%' : '25%',
    backgroundColor: (btnName === 'x'
      || btnName === '÷' || btnName === '-' || btnName === '+'
      || btnName === '=') ? color : color2,
    border: (btnName === '0') ? `1px solid ${borderCol}` : `1px solid ${borderCol}`,
  };

  return (<button type="button" className="btn" style={btnStyle} onClick={handleClick}>{btnName}</button>);
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: '#FFAA33',
};

export default Button;
