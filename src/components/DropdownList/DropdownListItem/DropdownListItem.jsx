import '../DropdownList.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function DropdownListItem({link, value}) {
  return(
    <li className="dp-menu-item">
      <Link to={link} className="dp-menu-link">{value}</Link>
    </li>
  );
}

DropdownListItem.propTypes = {
  link: propTypes.string,
  value: propTypes.string
}.isRequired;
