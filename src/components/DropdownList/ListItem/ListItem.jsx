import '../DropdownList.css';
import propTypes from 'prop-types';

export default function ListItem({value}) {
  return(
    <li className="dp-menu-item">
      <a href="./#" className="dp-menu-link">{value}</a>
    </li>
  );
}

ListItem.propTypes = {
  value: propTypes.string
}.isRequired;
