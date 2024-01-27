import './Navbar.css';
import propTypes from 'prop-types';

export default function Navbar({css, children}) {
  return(
    <nav className={`navbar ${css}`}>{children}</nav>
  );
}

Navbar.propTypes = {
  css: propTypes.string,
  children: propTypes.string,
}.isRequired;
