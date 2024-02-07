import { Link } from 'react-router-dom';
import { List, ListItem } from '../components/List/List';
import Navbar from '../layout/Navbar/Navbar';
import SearchBar, { Input } from '../components/SearchBar/SearchBar';

// Icons & Images
import { VscSearch, VscSettingsGear } from 'react-icons/vsc';
import headerImg from '../assets/img/header/header-steam-summer-sale.gif';
import MenuNavigation from '../layout/MenuNavigation/MenuNavigation';

// Componenets
import Header from '../layout/ContentLayout/Header/Header';
import Footer from '../layout/Footer/Footer';
import StoreContent from '../layout/StoreContent/StoreContent';
import Button from '../components/Button/Button';


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
                to="./browse"
                className="__generalLink">
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
        <SearchBar css="">
          <Input name="search" id="search" css="" text="Search..." />
          <span className="search-icon-box" id="searchIcon">
            <i className="search-icon">
              <VscSearch />
            </i>
          </span>
        </SearchBar>

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
                className="list-link __settings-btn">
                <Button
                  css="btn __btn-shop __btn-interaction"
                  id="settings">
                  <VscSettingsGear />
                </Button>
              </Link>
            </ListItem>
          </List>
        </Navbar>
      </MenuNavigation>
      <Header>
        <img src={headerImg} alt="Summer Sale" />
      </Header>
      <StoreContent />
      <Footer />
    </>
  );
}
