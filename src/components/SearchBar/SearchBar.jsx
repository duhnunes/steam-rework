import './SearchBar.css';
import propTypes from 'prop-types';

import { VscSearch } from 'react-icons/vsc';


export default function SearchBar({inputCss, id}) {
  return(
    <article className="search-box">
      <input type="text" name="search" id={id} className={`search ${inputCss}`} placeholder="Search..." />
      <span className="search-icon-box" id="searchIcon">
        <i className="search-icon">
          <VscSearch />
        </i>
      </span>
    </article>
  );
}

SearchBar.propTypes = {
  inputCss: propTypes.string,
  id: propTypes.string
}.isRequired;
