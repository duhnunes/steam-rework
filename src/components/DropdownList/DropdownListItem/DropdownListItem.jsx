import '../DropdownList.css';
import propTypes from 'prop-types';

export default function DropdownListItem({value}) {
  return(
    <li className="dp-menu-item">
      <a href="./#" className="dp-menu-link">{value}</a>
    </li>
  );
}

DropdownListItem.propTypes = {
  value: propTypes.string
}.isRequired;
