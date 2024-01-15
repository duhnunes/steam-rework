import propTypes from 'prop-types';
import './Button.css';

const Button = ({type, nameClass, value})=> {
  return(
    <>
      <button type={type} className={nameClass}>{value}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.string,
  nameClass: propTypes.string,
  value: propTypes.element
}.isRequired;
