import { Link } from 'react-router-dom';
import { List, ListItem } from '../components/List/List';
import Navbar from '../layout/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';

// Icons & Images
import { VscSettingsGear } from 'react-icons/vsc';
import headerImg from '../assets/img/header/header-steam-summer-sale.gif';
import MenuNavigation from '../layout/MenuNavigation/MenuNavigation';


import Header from '../layout/ContentLayout/Header/Header';
import IndexContent from '../layout/Container/Container';
import Footer from '../layout/Footer/Footer';


export default function Store() {
  return (
    <>
      <MenuNavigation css="">
        <Navbar css="">
          <List css="">
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink active">
                Home
              </Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink disabled">
                Browse</Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink disabled">
                Discover</Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink disabled">
                Points Shop</Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink disabled">
                Curators</Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink disabled">
                Gift Cards</Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink disabled">
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
                className="__generalLink disabled">
                Wishlist
              </Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink disabled">
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
      </MenuNavigation>
      <Header>
        <img src={headerImg} alt="Summer Sale" />
      </Header>
      <IndexContent />
      <Footer />
    </>
  );
}
