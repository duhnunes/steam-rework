import './H2.css';
import propTypes from 'prop-types';

export default function H2({content}) {
  return <h2 className="title-Main">{content}</h2>;
}

H2.propTypes = {
  content: propTypes.string
}.isRequired;
