import propTypes from 'prop-types';
import './Button.css';

const Button = ({type, css, children})=> {
  return(
    <>
      <button type={type} className={css}>{children}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.string,
  css: propTypes.string,
  children: propTypes.element
}.isRequired;
