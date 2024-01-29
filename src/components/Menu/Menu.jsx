import './Menu.css';
import { Link } from 'react-router-dom';


//Imports Componentes
import DropdownList from '../DropdownList/DropdownList';
import DropdownListItem from '../DropdownList/DropdownListItem/DropdownListItem';
import { List, ListItem } from '../List/List';

function Menu () {

  return(
    <>
      <List css="">
        <ListItem css="menu-item">
          <i className="logo"></i>
        </ListItem>
        <ListItem css="">
          <Link
            to="./"
            className="menu-link">
              Store
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="#" value="Browse" />
                <DropdownListItem link="#" value="Discovery Queue" />
                <DropdownListItem link="#" value="Wishlist" />
                <DropdownListItem link="#" value="Points Shop" />
                <DropdownListItem link="#" value="Gift Cards" />
                <DropdownListItem link="#" value="News" />
                <DropdownListItem link="#" value="Stats" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link
            className="menu-link"
            to="./">
              library
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="#" value="Collections" />
                <DropdownListItem link="#" value="Hidden Games" />
                <DropdownListItem link="#" value="Soundtracks" />
                <DropdownListItem link="#" value="Game Servers" />
                <DropdownListItem link="#" value="Activate a Product" />
                <DropdownListItem link="#" value="Add a non-Steam Game" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link
            to="/community"
            className="menu-link">
              Community
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="#" value="Discussions" />
                <DropdownListItem link="#" value="Market" />
                <DropdownListItem link="#" value="Workshop" />
                <DropdownListItem link="#" value="Broadcasts" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link
            className="menu-link"
            to="./#">
              DuH Nunes
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList>
                <DropdownListItem link="#" value="Activity" />
                <DropdownListItem link="#" value="Friends & Groups" />
                <DropdownListItem link="#" value="Content" />
                <DropdownListItem link="#" value="Inventory" />
                <DropdownListItem link="#" value="Badges" />
                <DropdownListItem link="#" value="Year In Review" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link to="./#" className="menu-link">Downloads</Link>
        </ListItem>
      </List>
    </>
  );
}

export default Menu;
