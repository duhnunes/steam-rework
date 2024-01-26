import { useState } from 'react';
import DropdownList from '../DropdownList/DropdownList';
import ListItem from '../DropdownList/ListItem/ListItem';
import './Menu.css';

function Menu () {
  
  const [openStore, setOpenStore] = useState(false);
  const [openCommunity, setCommunity] = useState(false);
  const [openMenuUser, setMenuUser] = useState(false);
  const [openLibrary, setLibrary] = useState(false);

  return(
    <>
      <ul className="menu-area">
        <li className="menu-item">
          <i className="logo"></i>
        </li>
        <li className="menu-item" onClick={() => {setOpenStore(!openStore);}}>
          <a className="menu-link" href="./#">
            store
          </a>
          <section className={`dropdown-area userMenu ${openStore? 'active' : ''}`}>
            <div className="dropdown-area-inside">
              <DropdownList>
                <ListItem value="Home" />
                <ListItem value="Browse" />
                <ListItem value="Discover" />
                <ListItem value="Wishlist" />
                <ListItem value="Cart" />
                <ListItem value="Points Shop" />
                <ListItem value="Gift Cards" />
                <ListItem value="News" />
                <ListItem value="Stats" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item" onClick={() => {setCommunity(!openCommunity);}}>
          <a className="menu-link" href="./#">
            community
          </a>
          <section className={`dropdown-area userMenu ${openCommunity? 'active' : ''}`}>
            <div className="dropdown-area-inside">
              <DropdownList>
                <ListItem value="Home" />
                <ListItem value="Discussions" />
                <ListItem value="Market" />
                <ListItem value="Workshop" />
                <ListItem value="Broadcasts" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item" onClick={() => {setMenuUser(!openMenuUser);}}>
          <a className="menu-link" href="./#">
            DuH Nunes
          </a>
          <section className={`dropdown-area userMenu ${openMenuUser? 'active' : ''}`}>
            <div className="dropdown-area-inside">
              <DropdownList>
                <ListItem value="Profile" />
                <ListItem value="Friends & Groups" />
                <ListItem value="Inventory" />
                <ListItem value="Badges" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item" onClick={() => {setLibrary(!openLibrary);}}>
          <a className="menu-link" href="./#">
            library
          </a>
          <section className={`dropdown-area userMenu ${openLibrary? 'active' : ''}`}>
            <div className="dropdown-area-inside">
              <DropdownList>
                <ListItem value="Profile" />
                <ListItem value="Friends & Groups" />
                <ListItem value="Inventory" />
                <ListItem value="Badges" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            downloads
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
