import DropdownList from '../DropdownList/DropdownList';
import DropdownListItem from '../DropdownList/DropdownListItem/DropdownListItem';
import './Menu.css';

function Menu () {
  
  return(
    <>
      <ul className="menu-area">
        <li className="menu-item">
          <i className="logo"></i>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            store
          </a>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem value="Home" />
                <DropdownListItem value="Browse" />
                <DropdownListItem value="Discover" />
                <DropdownListItem value="Wishlist" />
                <DropdownListItem value="Cart" />
                <DropdownListItem value="Points Shop" />
                <DropdownListItem value="Gift Cards" />
                <DropdownListItem value="News" />
                <DropdownListItem value="Stats" />
              </DropdownList>
            </div>
          </section>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            community
          </a>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem value="Home" />
                <DropdownListItem value="Discussions" />
                <DropdownListItem value="Market" />
                <DropdownListItem value="Workshop" />
                <DropdownListItem value="Broadcasts" />
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
                <DropdownListItem value="Profile" />
                <DropdownListItem value="Friends & Groups" />
                <DropdownListItem value="Inventory" />
                <DropdownListItem value="Badges" />
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
                <DropdownListItem value="Home" />
                <DropdownListItem value="Hidden Games" />
                <DropdownListItem value="Collections" />
                <DropdownListItem value="Soundtracks" />
                <DropdownListItem value="Game Servers" />
                <DropdownListItem value="Activate a Product" />
                <DropdownListItem value="Add a non-Steam Game" />
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
