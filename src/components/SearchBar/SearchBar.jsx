import './SearchBar.css';


import { VscSearch } from 'react-icons/vsc';


export default function SearchBar() {
  return(
    <article className="search-box">
      <input type="text" name="search" id="search" className="search" placeholder="Search..." />
      <span className="search-icon-box" id="searchIcon">
        <i className="search-icon">
          <VscSearch />
        </i>
      </span>
    </article>
  );
}
