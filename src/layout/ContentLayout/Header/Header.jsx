import './Header.css';
import propTypes from 'prop-types';

const Header = ({children, css}) => {
  return(
    <header className={`header ${css}`}>{children}</header>
  );
};

export default Header;

Header.propTypes = {
  children: propTypes.string,
  css: propTypes.string
}.isRequired;
