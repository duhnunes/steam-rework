import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/List/List';
import Navbar from '../Navbar/Navbar';
import './GeneralMenu.css';

import { VscSettingsGear } from 'react-icons/vsc';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function GeneralMenu () {
  return(
    <section className="generalMenu">
      <Navbar css="">
        <List css="">
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink active-menu">
                Home
            </Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                Browse</Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                Discover</Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                Points Shop</Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                Curators</Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                Gift Cards</Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                News</Link>
          </ListItem>
        </List>
      </Navbar>

      {/* Search section */}
      <SearchBar inputCss="" id="searchGeneral" />

      {/*  Shopping Menu and Setings */}
      <Navbar css="shopSettings-area">
        <List css="__generalMenu">
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                Wishlist
            </Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="__generalLink">
                Cart
            </Link>
          </ListItem>
          <ListItem css="__generalItem">
            <Link
              to="./#"
              className="btn __btn-shop __btn-interaction">
              <VscSettingsGear />
            </Link>
          </ListItem>
        </List>
      </Navbar>
      
    </section>
  );
}

