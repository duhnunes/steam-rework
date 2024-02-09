import './Browse.css';
import { Link } from 'react-router-dom';

// Icons Images
import { VscSettingsGear, VscSearch } from 'react-icons/vsc';
import { FaThList } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { TbFilterOff } from 'react-icons/tb';

import logoWin from '../assets/img/Windows8.svg';
import wishlist from '../assets/img/Favorite border.svg';
import cardGame1 from '../assets/img/browse/01.png';
import cardGame2 from '../assets/img/browse/02.png';
import cardGame3 from '../assets/img/browse/03.png';
import cardGame4 from '../assets/img/browse/04.png';
import cardGame5 from '../assets/img/browse/05.png';
import cardGame6 from '../assets/img/browse/06.png';
import cardGame7 from '../assets/img/browse/07.png';


// Components
import MenuNavigation from '../layout/MenuNavigation/MenuNavigation';
import Navbar from '../layout/Navbar/Navbar';
import { List, ListItem } from '../components/List/List';
import SearchBar, { Input } from '../components/SearchBar/SearchBar';
import BrowseSteam from '../layout/ContentLayout/SectionCards/BrowseSteam/BrowseSteam';
import Header from '../layout/ContentLayout/Header/Header';
import H2 from '../components/H2/H2';
import Button from '../components/Button/Button';
import Arrows from '../components/Arrows/Arrows';
import Pagination from '../components/Pagination/Pagination';


export default function Browse() {
  return(
    <>
      <MenuNavigation css="">
        <Navbar css="">
          <List css="">
            <ListItem css="__generalItem">
              <Link
                to="/"
                className="__generalLink">
                Home
              </Link>
            </ListItem>
            <ListItem css="__generalItem">
              <Link
                to="./#"
                className="__generalLink active">
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

      {/* PAGE CONTENT */}

      <Header css="">
        <span className="browse-header-img"></span>
        <section className="container __browse-recoil-header">
          <BrowseSteam headerTitle="Top Categories" />
        </section>
      </Header>

      <main className="main container __main-browse">

        <section className="__nav-section-browse">
          <H2 css="__browse-h2" content="Browse Steam" />
          <Navbar css="__browse">
            <section className="nav-view">
              <p>View</p>
              <Button type="button" css="btn">
                <FaThList />
              </Button>
              <Button type="button" css="btn">
                <BsFillGrid3X2GapFill />
              </Button>
            </section>

            <List css="">
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse active">
                  All Items
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  New and Treding
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  Top Sellers
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  Top Rated
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  Discounted
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  Popular
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  Coming Soon
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  On Wishlist
                </Link>
              </ListItem>
              <ListItem css="">
                <Link
                  to="./#"
                  className="list-link __nav-browse">
                  Upcoming Events
                </Link>
              </ListItem>
            </List>
          </Navbar>
        </section>

        {/* BODY */}
        <section className="browse-grid">
          
          <section className="filters-area">
            <article className="select-filter-area">
              <p className="title __filter-p">Filters</p>
              <span className="filter-icon">
                <Button type="button" css="btn">
                  <TbFilterOff />
                </Button>
              </span>
            </article>

            <SearchBar css="">
              <Input name="searchFilter" id="searchFilter" css="__filter" text="Search for a Tag..." />
              <span className="search-icon-box" id="searchIcon">
                <i className="search-icon __browse-filter-icon">
                  <VscSearch />
                </i>
              </span>

            </SearchBar>
            <article className="tags-area">
              <span className="tags">
                  Adventure
                <Button type="button" css="btn btn-x">X</Button>
              </span>
              <span className="tags">
                  RPG
                <Button type="button" css="btn btn-x">X</Button>
              </span>
              <span className="tags">
                  Shooter
                <Button type="button" css="btn btn-x">X</Button>
              </span>
            </article>

            {/* FILTERS 1 */}
            <details className="catalog-filter" open>
              <summary className="catalog-filter-header">
                <h3>Top-Level Genres</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item active">
                    <p>Adventure</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Casual</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item active">
                    <p>RPG</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Strategy</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Simulation</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 2 */}
            <details className="catalog-filter" open>
              <summary className="catalog-filter-header">
                <h3>Genres</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item active">
                    <p>Shooter</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>JRPG</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Sandbox</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Rogue-Like</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Platformer</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 3 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Sub-genres</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 4 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Visuals & Viewpoint</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 5 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Sub-genres</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 6 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Features</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 7 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Players</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 8 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Platform</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 9 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Language</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 10 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Price</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 11 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Achievements</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 12 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Trading Cards</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

            {/* FILTERS 13 */}
            <details className="catalog-filter">
              <summary className="catalog-filter-header">
                <h3>Items</h3>
                <Arrows />
              </summary>
              
              <div className="catalog-filter-body">
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 01</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 02</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 03</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 04</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 05</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </div>
            </details>

          </section>

          <section className="cards-area">
            <section className="cards-games-area">
              {/* CARD 1 */}
              <article className="card">
                <img src={cardGame1} alt="Fallout 4" className="cards-games-img" />
                <section className="card-info">
                  <h2>Fallout 4</h2>
                  <article className="category-buttons">
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Open-World
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Post-Apocalyptic
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Single-Player
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Exploration
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    +
                    </Button>
                  </article>

                  <article className="card-time-area">
                    <img src={logoWin} alt="Compatible Platform" className="card-info-win" />
                    <span>Nov 10, 2015</span>
                  </article>

                  <article className="card-game-rate">
                    <progress id="rateGame" value="80" max="100" className="progress-rate"></progress>
                    <p className="card-rate-total">207,000</p>
                    <p className="card-rate-total">User Reviews</p>
                  </article>
                  
                </section>

                <section className="card-interaction">
                  <Button
                    css="btn btn-dark"
                    id="addFavorite">
                    <img src={wishlist} alt="Wishlist this Game" />
                  </Button>

                  <section className="card-info-price">
                    <span className="card-info__time-offer">Until October 31</span>
                    <span className="card-info__discount">-75%</span>

                    <article className="card-info__discount-diff">
                      <span className="discount-before">$19.99</span>
                      <span className="discount-after">$4.99</span>
                    </article>
                    <Button
                      css="btn btn-secondary btn-buy"
                      id="buynow">
                    Add to Cart
                    </Button>
                  </section>
                </section>
              </article>

              {/* CARD 2 */}
              <article className="card">
                <img src={cardGame2} alt="Tom Clancy's The Division" className="cards-games-img" />
                <section className="card-info">
                  <h2>Tom Clancy’s The Division® 2</h2>
                  <article className="category-buttons">
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Multiplayer
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Action
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Third-Person Shooter
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Looter Shooter
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    +
                    </Button>
                  </article>

                  <article className="card-time-area">
                    <img src={logoWin} alt="Compatible Platform" className="card-info-win" />
                    <span>Jan 12, 2023</span>
                  </article>

                  <article className="card-game-rate">
                    <progress id="rateGame" value="60" max="100" className="progress-rate"></progress>
                    <p className="card-rate-total">9,500</p>
                    <p className="card-rate-total">User Reviews</p>
                  </article>
                  
                </section>

                <section className="card-interaction">
                  <Button
                    css="btn btn-dark"
                    id="addFavorite">
                    <img src={wishlist} alt="Wishlist this Game" />
                  </Button>

                  <section className="card-info-price">
                    <span className="discount-before">$29.99</span>
                    <Button
                      css="btn btn-secondary btn-buy"
                      id="buynow">
                    Add to Cart
                    </Button>
                  </section>
        
                </section>

              </article>

              {/* CARD 3 */}
              <article className="card">
                <img src={cardGame3} alt="Remnant 2" className="cards-games-img" />
                <section className="card-info">
                  <h2>Remnant II</h2>
                  <article className="category-buttons">
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Souls-like
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    RPG
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Action
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Adventure
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    +
                    </Button>
                  </article>

                  <article className="card-time-area">
                    <img src={logoWin} alt="Compatible Platform" className="card-info-win" />
                    <span>Jul 25, 2023</span>
                  </article>

                  <article className="card-game-rate">
                    <progress id="rateGame" value="80" max="100" className="progress-rate"></progress>
                    <p className="card-rate-total">23,000</p>
                    <p className="card-rate-total">User Reviews</p>
                  </article>
                  
                </section>

                <section className="card-interaction">
                  <Button
                    css="btn btn-dark"
                    id="addFavorite">
                    <img src={wishlist} alt="Wishlist this Game" />
                  </Button>

                  <section className="card-info-price">
                    <span className="discount-before">$49.99</span>
                    <Button
                      css="btn btn-secondary btn-buy"
                      id="buynow">
                    Add to Cart
                    </Button>
                  </section>
        
                </section>

              </article>

              {/* CARD 4 */}
              <article className="card">
                <img src={cardGame4} alt="Fallout VR" className="cards-games-img" />
                <section className="card-info">
                  <h2>Fallout VR</h2>
                  <article className="category-buttons">
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    VR
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Open-World
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Post-Apocalyptic
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    RPG
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    +
                    </Button>
                  </article>

                  <article className="card-time-area">
                    <img src={logoWin} alt="Compatible Platform" className="card-info-win" />
                    <p className="text-dim">VR</p>
                    <span>Dec 12, 2017</span>
                  </article>

                  <article className="card-game-rate">
                    <progress id="rateGame" value="60" max="100" className="progress-rate"></progress>
                    <p className="card-rate-total">4,600</p>
                    <p className="card-rate-total">User Reviews</p>
                  </article>
                  
                </section>

                <section className="card-interaction">
                  <Button
                    css="btn btn-dark"
                    id="addFavorite">
                    <img src={wishlist} alt="Wishlist this Game" />
                  </Button>

                  <section className="card-info-price">
                    <span className="card-info__time-offer">Until October 31</span>
                    <span className="card-info__discount">-75%</span>

                    <article className="card-info__discount-diff">
                      <span className="discount-before">$59.99</span>
                      <span className="discount-after">$14.99</span>
                    </article>
                    <Button
                      css="btn btn-secondary btn-buy"
                      id="buynow">
                    Add to Cart
                    </Button>
                  </section>
                </section>
              </article>

              {/* CARD 5 */}
              <article className="card">
                <img src={cardGame5} alt="Skibidi Toilet Hero" className="cards-games-img" />
                <section className="card-info">
                  <h2>Skibidi Toilet Hero</h2>
                  <article className="category-buttons">
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Action
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Indie
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Casual FPS
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Faced-Paced
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    +
                    </Button>
                  </article>

                  <article className="card-time-area">
                    <img src={logoWin} alt="Compatible Platform" className="card-info-win" />
                    <span>Q4 2023</span>
                  </article>

                  <article className="card-game-rate">
                    <progress id="rateGame" value="60" max="100" className="progress-rate"></progress>
                    <p className="card-rate-total">No Reviews Yet</p>
                    <p className="card-rate-total"> </p>
                  </article>
                  
                </section>

                <section className="card-interaction">
                  <Button
                    css="btn btn-dark"
                    id="addFavorite">
                    <img src={wishlist} alt="Wishlist this Game" />
                  </Button>

                  <section className="card-info-price">
                    <span className="card-info__time-offer">Coming Soon</span>
                  </section>
                </section>
              </article>

              {/* CARD 6 */}
              <article className="card">
                <img src={cardGame6} alt="Borderlands 2" className="cards-games-img" />
                <section className="card-info">
                  <h2>Borderlands 2</h2>
                  <article className="category-buttons">
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Loot
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Shooter
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Action
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Co-Op
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    +
                    </Button>
                  </article>

                  <article className="card-time-area">
                    <img src={logoWin} alt="Compatible Platform" className="card-info-win" />
                    <span>Sep 18, 2012</span>
                  </article>

                  <article className="card-game-rate">
                    <progress id="rateGame" value="90" max="100" className="progress-rate"></progress>
                    <p className="card-rate-total">187,000</p>
                    <p className="card-rate-total">User Reviews</p>
                  </article>
                  
                </section>

                <section className="card-interaction">
                  <Button
                    css="btn btn-dark"
                    id="addFavorite">
                    <img src={wishlist} alt="Wishlist this Game" />
                  </Button>

                  <section className="card-info-price">
                    <span className="discount-before">$19.99</span>
                    <Button
                      css="btn btn-secondary btn-buy"
                      id="buynow">
                    Add to Cart
                    </Button>
                  </section>
                </section>
              </article>

              {/* CARD 7 */}
              <article className="card">
                <img src={cardGame7} alt="The Outer Worlds" className="cards-games-img" />
                <section className="card-info">
                  <h2>The Outer Worlds</h2>
                  <article className="category-buttons">
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Action
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    RPG
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Exploration
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    Open-World
                    </Button>
                    <Button
                      css="btn btn-dark btn-category"
                      id="">
                    +
                    </Button>
                  </article>

                  <article className="card-time-area">
                    <img src={logoWin} alt="Compatible Platform" className="card-info-win" />
                    <span>Oct, 23 2020</span>
                  </article>

                  <article className="card-game-rate">
                    <progress id="rateGame" value="80" max="100" className="progress-rate"></progress>
                    <p className="card-rate-total">20,000</p>
                    <p className="card-rate-total">User Reviews</p>
                  </article>
                  
                </section>

                <section className="card-interaction">
                  <Button
                    css="btn btn-dark"
                    id="addFavorite">
                    <img src={wishlist} alt="Wishlist this Game" />
                  </Button>

                  <section className="card-info-price">
                    <span className="discount-before">$29.99</span>
                    <Button
                      css="btn btn-secondary btn-buy"
                      id="buynow">
                    Add to Cart
                    </Button>
                  </section>
                </section>
              </article>

            </section>

            <Pagination />
            
          </section>
        </section>

      </main>
      
      
    </>
  );
}
