import propTypes from 'prop-types';
import './Button.css';

const Button = ({type, css, id, children})=> {
  return(
    <>
      <button type="button" className={css} id={id}>{children}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.string,
  css: propTypes.string,
  children: propTypes.element
}.isRequired;
