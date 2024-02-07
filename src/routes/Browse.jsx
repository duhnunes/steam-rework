import './Browse.css';
import { Link } from 'react-router-dom';

// Icons Images
import { VscSettingsGear, VscSearch } from 'react-icons/vsc';
import { FaThList } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { TbFilterOff } from 'react-icons/tb';

import cardGame1 from '../assets/img/card-games/01.png';

// Components
import MenuNavigation from '../layout/MenuNavigation/MenuNavigation';
import Navbar from '../layout/Navbar/Navbar';
import { List, ListItem } from '../components/List/List';
import SearchBar, { Input } from '../components/SearchBar/SearchBar';
import BrowseSteam from '../layout/ContentLayout/SectionCards/BrowseSteam/BrowseSteam';
import Header from '../layout/ContentLayout/Header/Header';
import H2 from '../components/H2/H2';
import Button from '../components/Button/Button';
import { useState } from 'react';

export default function Browse() {

  const [openTopLevel, setOpenTopLevel] = useState(false);
  const [openGenres, setOpenGenres] = useState(false);
  const [openSubGenres, setOpenSubGenres] = useState(false);
  const [openVisual, setOpenVisual] = useState(false);
  const [openThemes, setOpenThemes] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openPlayers, setOpenPlayers] = useState(false);
  const [openPlatform, setOpenPlatform] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openAchievements, setOpenAchievements] = useState(false);
  const [openTradingCards, setOpenTradingCards] = useState(false);
  const [openItems, setOpenItems] = useState(false);

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
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenTopLevel(!openTopLevel)}>
                <h3>Top-Level Genres</h3>
                <span className={`arrow btn btn-x ${openTopLevel ? 'up' : 'down'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openTopLevel ? '' : 'active'}`}>
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
              </section>
            </article>

            {/* FILTERS 2 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenGenres(!openGenres)}>
                <h3>Genres</h3>
                <span className={`arrow btn btn-x ${openGenres ? 'up' : 'down'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openGenres ? '' : 'active'}`}>
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
              </section>
            </article>

            {/* FILTERS 3 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenSubGenres(!openSubGenres)}>
                <h3>Sub-genres</h3>
                <span className={`arrow btn btn-x ${openSubGenres ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openSubGenres ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 4 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenVisual(!openVisual)}>
                <h3>Visuals & Viewpoint</h3>
                <span className={`arrow btn btn-x ${openVisual ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openVisual ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 5 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenThemes(!openThemes)}>
                <h3>Themes & Moods</h3>
                <span className={`arrow btn btn-x ${openThemes ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openThemes ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 6 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenFeatures(!openFeatures)}>
                <h3>Features</h3>
                <span className={`arrow btn btn-x ${openFeatures ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openFeatures ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 7 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenPlayers(!openPlayers)}>
                <h3>Players</h3>
                <span className={`arrow btn btn-x ${openPlayers ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openPlayers ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 8 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenPlatform(!openPlatform)}>
                <h3>Platform</h3>
                <span className={`arrow btn btn-x ${openPlatform ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openPlatform ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 9 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenLanguage(!openLanguage)}>
                <h3>Language</h3>
                <span className={`arrow btn btn-x ${openLanguage ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openLanguage ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 10 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenPrice(!openPrice)}>
                <h3>Price</h3>
                <span className={`arrow btn btn-x ${openPrice ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openPrice ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 11 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenAchievements(!openAchievements)}>
                <h3>Achievements</h3>
                <span className={`arrow btn btn-x ${openAchievements ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openAchievements ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 12 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenTradingCards(!openTradingCards)}>
                <h3>Trading Cards</h3>
                <span className={`arrow btn btn-x ${openTradingCards ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openTradingCards ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

            {/* FILTERS 13 */}
            <article className="catalog-filter">
              <div className="catalog-filter-header" onClick={() => setOpenItems(!openItems)}>
                <h3>Items</h3>
                <span className={`arrow btn btn-x ${openItems ? 'down' : 'up'}`}></span>
              </div>
              <section className={`catalog-filter-body ${openItems ? 'active' : ''}`}>
                <List css="__catalog">
                  <ListItem css="__catalog-item">
                    <p>Item 1</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 2</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 3</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 4</p>
                    <span>5.000</span>
                  </ListItem>
                  <ListItem css="__catalog-item">
                    <p>Item 5</p>
                    <span>5.000</span>
                  </ListItem>
                </List>
                <Link
                  to="./#"
                  className="text-dim">
                See More
                </Link>
              </section>
            </article>

          </section>

          <section className="cards-area">
            <section className="cards-games-area">
              <article className="card">
                <img src={cardGame1} alt="Fallout 4" />
              </article>
            </section>

            <section className="pagination">haha</section>
          </section>
        </section>

      </main>
      
      
    </>
  );
}
