import './List.css';
import propTypes from 'prop-types';

export function List({css, children}) {
  return(
    <ul className={`list-menu ${css}`}>{children}</ul>
  );
}
export function ListItem({css, children}) {
  return(
    <li className={`list-item ${css}`}>{children}</li>
  );
}

List.propTypes = {
  css: propTypes.string,
  children: propTypes.string
}.isRequired;

ListItem.propTypes = {
  css:propTypes.string,
  children:propTypes.string
}.isRequired;
