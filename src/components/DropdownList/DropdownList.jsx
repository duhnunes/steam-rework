import './DropdownList.css';
import propTypes from 'prop-types';


export default function DropdownList({children}) {
  return(
    <ul className="dp-menu-list">{children}</ul>
  );
}

DropdownList.propTypes = {
  children: propTypes.string
}.isRequired;
