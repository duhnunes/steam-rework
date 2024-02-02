import './H2.css';
import propTypes from 'prop-types';

export default function H2({css, content}) {
  return <h2 className={`title-Main ${css}`}>{content}</h2>;
}

H2.propTypes = {
  css: propTypes.string,
  content: propTypes.string
}.isRequired;
