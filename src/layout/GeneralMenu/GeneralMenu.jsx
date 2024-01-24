import './GeneralMenu.css';

import { VscSearch, VscSettingsGear } from 'react-icons/vsc';

function GeneralMenu () {
  return(
    <section className="generalMenu">
      <nav className="menuPages">
        <ul className="generalNavbar">
          <li className="generalNavbar-item">
            <a href="./#" className="generalNavbar-link active-menu">
            Home
            </a>
          </li>
          <li className="generalNavbar-item">
            <a href="./#" className="generalNavbar-link">
            Browse
            </a>
          </li>
          <li className="generalNavbar-item">
            <a href="./#" className="generalNavbar-link">
            Discover
            </a>
          </li>
          <li className="generalNavbar-item">
            <a href="./#" className="generalNavbar-link">
            Points Shop
            </a>
          </li>
          <li className="generalNavbar-item">
            <a href="./#" className="generalNavbar-link">
            Curators
            </a>
          </li>
          <li className="generalNavbar-item">
            <a href="./#" className="generalNavbar-link">
            Gift Cards
            </a>
          </li>
          <li className="generalNavbar-item">
            <a href="./#" className="generalNavbar-link">
            News
            </a>
          </li>
        </ul>
      </nav>
      {/* Search section */}
      <article className="search-box">
        <input type="text" name="search" id="search" className="search" placeholder="Search..." />
        <span className="search-icon-box" id="searchIcon">
          <i className="search-icon">
            <VscSearch />
          </i>
        </span>
      </article>
      {/*  Shopping Menu and Setings */}
      <article className="shopSettings-area">
        <ul className="shopSettings-menu">
          <li className="shopSettings-menu-item">
            <a href="./#" className="shopSettings-menu-link">
              Wishlist
            </a>
          </li>
          <li className="shopSettings-menu-item">
            <a href="./#" className="shopSettings-menu-link">
              Cart
            </a>
          </li>
          <li className="shopSettings-menu-item btn">
            <VscSettingsGear />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default GeneralMenu;
