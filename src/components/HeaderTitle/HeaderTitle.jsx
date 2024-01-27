import './HeaderTitle.css';
import propTypes from 'prop-types';

export default function HeaderTitle({css, children}) {
  return(
    <h2 className={`title ${css}`}>{children}</h2>
  );
}

HeaderTitle.propTypes = {
  css: propTypes.string,
  children: propTypes.string
}.isRequired;
