import './Menu.css';
import { Link } from 'react-router-dom';


//Imports Componentes
import DropdownList, { DropdownListItem } from '../DropdownList/DropdownList';
import { List, ListItem } from '../List/List';

function Menu () {

  return(
    <>
      <List css="">
        <ListItem css="">
          <i className="logo"></i>
        </ListItem>
        <ListItem css="">
          <Link
            to="./"
            className="list-link active">
              Store
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList css="">
                <DropdownListItem link="#" css="disabled" value="Browse" />
                <DropdownListItem link="#" css="disabled" value="Discovery Queue" />
                <DropdownListItem link="#" css="disabled" value="Wishlist" />
                <DropdownListItem link="#" css="disabled" value="Points Shop" />
                <DropdownListItem link="#" css="disabled" value="Gift Cards" />
                <DropdownListItem link="#" css="disabled" value="News" />
                <DropdownListItem link="#" css="disabled" value="Stats" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link
            className="list-link disabled"
            to="./#">
              library
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList css="">
                <DropdownListItem link="#" css="disabled" value="Collections" />
                <DropdownListItem link="#" css="disabled" value="Hidden Games" />
                <DropdownListItem link="#" css="disabled" value="Soundtracks" />
                <DropdownListItem link="#" css="disabled" value="Game Servers" />
                <DropdownListItem link="#" css="disabled" value="Activate a Product" />
                <DropdownListItem link="#" css="disabled" value="Add a non-Steam Game" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link
            to="/community"
            className="list-link">
              Community
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList css="">
                <DropdownListItem link="#" css="disabled" value="Discussions" />
                <DropdownListItem link="#" css="disabled" value="Market" />
                <DropdownListItem link="#" css="disabled" value="Workshop" />
                <DropdownListItem link="#" css="disabled" value="Broadcasts" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link
            className="list-link disabled"
            to="./#">
              DuH Nunes
          </Link>
          <section className="dropdown-area userMenu">
            <div className="dropdown-area-inside">
              <DropdownList css="">
                <DropdownListItem link="#" css="disabled" value="Activity" />
                <DropdownListItem link="#" css="disabled" value="Friends & Groups" />
                <DropdownListItem link="#" css="disabled" value="Content" />
                <DropdownListItem link="#" css="disabled" value="Inventory" />
                <DropdownListItem link="#" css="disabled" value="Badges" />
                <DropdownListItem link="#" css="disabled" value="Year In Review" />
              </DropdownList>
            </div>
          </section>
        </ListItem>
        <ListItem css="">
          <Link to="./#" className="list-link disabled">Downloads</Link>
        </ListItem>
      </List>
    </>
  );
}

export default Menu;
