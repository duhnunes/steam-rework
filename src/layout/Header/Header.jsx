import './Header.css';
import propTypes from 'prop-types';

const Header = ({src, alt}) => {
  return(
    <header className="header-img">
      <img src={src} alt={alt} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  src: propTypes.string,
  alt: propTypes.string
}.isRequired;
