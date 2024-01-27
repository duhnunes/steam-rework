import { useState } from 'react';
import DropdownList from '../DropdownList/DropdownList';
import DropdownListItem from '../DropdownList/DropdownListItem/DropdownListItem';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu () {

  const [openMenuStore, setOpenMenuStore] = useState(false);
  
  return(
    <>
      <ul className="menu-area">
        <li className="menu-item">
          <i className="logo"></i>
        </li>
        <li className="menu-item">
          <span
            className="menu-link"
            onClick={() => {setOpenMenuStore(!openMenuStore);}}
          >
            Store
          </span>
          <section className={`dropdown-area userMenu ${openMenuStore?'active' : ''}`}>
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="./" value="Store" />
                <DropdownListItem link="#" value="Browse" />
                <DropdownListItem link="#" value="Discover" />
                <DropdownListItem link="#" value="Wishlist" />
                <DropdownListItem link="#" value="Cart" />
                <DropdownListItem link="#" value="Points Shop" />
                <DropdownListItem link="#" value="Gift Cards" />
                <DropdownListItem link="#" value="News" />
                <DropdownListItem link="#" value="Stats" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item">
          <Link to="/community" className="menu-link">Community</Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="#" value="Home" />
                <DropdownListItem link="#" value="Discussions" />
                <DropdownListItem link="#" value="Market" />
                <DropdownListItem link="#" value="Workshop" />
                <DropdownListItem link="#" value="Broadcasts" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            DuH Nunes
          </a>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="#" value="Profile" />
                <DropdownListItem link="#" value="Friends & Groups" />
                <DropdownListItem link="#" value="Inventory" />
                <DropdownListItem link="#" value="Badges" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            library
          </a>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="#" value="Home" />
                <DropdownListItem link="#" value="Hidden Games" />
                <DropdownListItem link="#" value="Collections" />
                <DropdownListItem link="#" value="Soundtracks" />
                <DropdownListItem link="#" value="Game Servers" />
                <DropdownListItem link="#" value="Activate a Product" />
                <DropdownListItem link="#" value="Add a non-Steam Game" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item">
          <Link to="/#" className="menu-link">Downloads</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
