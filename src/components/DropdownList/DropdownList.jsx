import './DropdownList.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function DropdownList({css, children}) {
  return <ul className={`list-menu ${css}`}>{children}</ul>;
}

export function DropdownListItem({link, css, value}) {
  return(
    <li className="list-item">
      <Link to={link} className={`list-link ${css}`}>{value}</Link>
    </li>
  );
}


DropdownList.propTypes = {
  children: propTypes.string
}.isRequired;

DropdownListItem.propTypes = {
  link: propTypes.string,
  value: propTypes.string
}.isRequired;
