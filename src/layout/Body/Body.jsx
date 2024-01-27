import './Body.css';
import propTypes from 'prop-types';

export default function Body({css, children}) {
  return(
    <main className={`main ${css}`}>{children}</main>
  );
}

Body.propTypes = {
  css: propTypes.string,
  children: propTypes.string
}.isRequired;
