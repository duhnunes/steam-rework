import './MenuNavigation.css';
import propTypes from 'prop-types';


export default function MenuNavigation ({css, children}) {
  return <section className={`menuNavigation ${css}`}>{children}</section>;
}

MenuNavigation.propTypes = {
  children: propTypes.string,
  css: propTypes.string
}.isRequired;
