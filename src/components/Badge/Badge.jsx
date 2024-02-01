import './Badge.css';
import propTypes from 'prop-types';

export default function Badge({css, children}){
  return <span className={`badge ${css}`}>{children}</span>;
}

Badge.propTypes = {
  css: propTypes.string,
  children: propTypes.string
}.isRequired;
