import GeneralMenu from '../layout/GeneralMenu/GeneralMenu';
import './Community.css';
import { Link } from 'react-router-dom';

// Icons & Imagens
import { TbWorld } from 'react-icons/tb';
import { FaStoreAlt, FaRegSmile, FaPlay } from 'react-icons/fa';
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import { BiSolidComment } from 'react-icons/bi';
import avatar from '../assets/img/logao.jpg';
import gameImage from '../assets/img/community/01.png';
import gameImage2 from '../assets/img/broadcast/01.png';
import likeDislike from '../assets/img/community/like.png';
import logoSteam from '../assets/img/community/logosteam.png';


// Componenets
import Footer from '../layout/Footer/Footer';
import Header from '../layout/ContentLayout/Header/Header';
import Navbar from '../layout/Navbar/Navbar';
import {List, ListItem} from '../components/List/List';
import Body from '../layout/Body/Body';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button';
import Badge from '../components/Badge/Badge';
import PlayButton from '../components/PlayButton/PlayButton';

export default function Community(){
  
  return(
    <>
      <GeneralMenu />
      <Header css="__community-height">
        <span className="community-header-img"></span>
        <section className="header-msg-area">
          <article className="title">
            <p>Welcome to Steam Community. Search for a game to get started.</p>
          </article>
          <SearchBar inputCss="__header" id="searchCommunity" />
        </section>

        <section className="container __community-recoil">
          <Navbar css="__nav-community">
            <section className="links">
              <List css="">
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link active">All</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Screenshots</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Artworks</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Workshop</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Broadcasts</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Videos</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">News</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Guides</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Reviews</Link>
                </ListItem>
              </List>
            </section>

            <section className="filters">
              <List css="">
                <ListItem css="">
                  <p className="list-link __nav-community-p">Viewing</p>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link active">Most Popular</Link>
                </ListItem>
                <ListItem css="">
                  <Link
                    to="./#"
                    className="list-link __nav-community-link">Most Recent</Link>
                </ListItem>
              </List>
            </section>
          </Navbar>
        </section>
      </Header>

      {/* BODY */}
      <Body css="container __community-recoil community-body">
        {/* CARD 1 */}
        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Elite Dangerous</HeaderTitle>
            <Link
              to="./#"
              className="icon __primary">
              <TbWorld className="icon" />
            </Link>
            <Link
              to="./#"
              className="icon __primary">
              <FaStoreAlt className="icon" />
            </Link>
          </article>

          <article className="body-content-subtitle">
            <div className="content-user">
              <img src={avatar} className="avatar" alt="Avatar User" />
              Duh Nunes
            </div>
            <div className="date-time">Posted on 12 Sep 2023</div>
          </article>

          <article className="body-content-image">
            <img src={gameImage} alt="Elite Dangerous" />
          </article>

          <article className="body-content-caption">
            <p className="body-content-comment">
              me when uuuuh space
            </p>
            <div className="body-content-interaction">
              <Button type="button" css="btn btn-bgMain __btn-interaction">
                <IoMdThumbsUp />
                <span className="interaction-counter">5</span>
              </Button>
              <Button type="button" css="btn btn-bgMain __btn-interation">
                <BiSolidComment />
                <span className="interaction-counter">2</span>
              </Button>
            </div>
          </article>
        </section>

        {/* CARD 2 */}
        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Stellaris</HeaderTitle>
            <Link
              to="./#"
              className="icon __primary">
              <TbWorld className="icon" />
            </Link>
            <Link
              to="./#"
              className="icon __primary">
              <FaStoreAlt className="icon" />
            </Link>
          </article>

          <article className="body-content-subtitle">
            <div className="content-user">
              <img src={avatar} className="avatar" alt="Avatar User" />
              Duh Nunes
              <span className="review-counter">3 reviews</span>
            </div>
            <div className="date-time">Posted on 12 Sep 2023</div>
          </article>

          <article className="body-content-image">

            <section className="card-body __avaliation">
              <img src={likeDislike} alt="Like/Dislike" />

              <article className="avaliation-info">
                <span className="aval-vote">Recommended</span>
                <span className="aval-hoursCounter">2,130.2 hrs on record (2,069.9 hrs at review time)</span>
              </article>

              <img src={logoSteam} alt="Logo Steam" />
            </section>

            <section className="aval-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur quae quidem fugiat qui distinctio consequatur cum. Officiis rerum nisi deserunt. Debitis, recusandae quia nostrum at natus obcaecati. Possimus ex, repudiandae illum impedit adipisci cumque atque unde totam repellendus sunt consequuntur quae ad expedita cum culpa autem illo explicabo molestiae ut odit. Dolores!
              </p>
            </section>
          </article>

          <article className="body-content-caption __column">
            <p className="subtitle">Was this review helpful?</p>
            <section className="body-content-caption-grid">
              <section className="body-content-interaction">
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>Yes</span>
                  <IoMdThumbsUp />
                  <span className="interaction-counter">5</span>
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>No</span>
                  <IoMdThumbsDown />
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>Funny</span>
                  <FaRegSmile />
                  <span className="btn btn-bgMain __btn-interaction">6</span>
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>Award</span>
                  <FaRegSmile />
                  <span className="btn btn-bgMain __btn-interaction">5</span>
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <BiSolidComment />
                  <span className="btn btn-bgMain __btn-interaction">2</span>
                </Button>

              </section>
            </section>
          </article>
          
        </section>
        {/* CARD 2 */}
        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Elder Scrolls V: Skyrim</HeaderTitle>
            <Link
              to="./#"
              className="icon __primary">
              <TbWorld className="icon" />
            </Link>
            <Link
              to="./#"
              className="icon __primary">
              <FaStoreAlt className="icon" />
            </Link>
          </article>

          <article className="body-content-subtitle">
            <div className="content-user">
              <img src={avatar} className="avatar" alt="Avatar User" />
              Duh Nunes
              <span className="review-counter">3 reviews</span>
            </div>
            <div className="date-time">Posted on 12 Sep 2023</div>
          </article>

          <article className="body-content-image">

            <section className="card-body __avaliation">
              <img src={likeDislike} alt="Like/Dislike" />

              <article className="avaliation-info">
                <span className="aval-vote">Recommended</span>
                <span className="aval-hoursCounter">2,130.2 hrs on record (2,069.9 hrs at review time)</span>
              </article>

              <img src={logoSteam} alt="Logo Steam" />
            </section>

            <section className="aval-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur quae quidem fugiat qui distinctio consequatur cum. Officiis rerum nisi deserunt. Debitis, recusandae quia nostrum at natus obcaecati. Possimus ex, repudiandae illum impedit adipisci cumque atque unde totam repellendus sunt consequuntur quae ad expedita cum culpa autem illo explicabo molestiae ut odit. Dolores!
              </p>
            </section>
          </article>

          <article className="body-content-caption __column">
            <p className="subtitle">Was this review helpful?</p>
            <section className="body-content-caption-grid">
              <section className="body-content-interaction">
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>Yes</span>
                  <IoMdThumbsUp />
                  <span className="interaction-counter">5</span>
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>No</span>
                  <IoMdThumbsDown />
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>Funny</span>
                  <FaRegSmile />
                  <span className="btn btn-bgMain __btn-interaction">6</span>
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <span>Award</span>
                  <FaRegSmile />
                  <span className="btn btn-bgMain __btn-interaction">5</span>
                </Button>
                <Button type="button" css="btn btn-bgMain __btn-interaction">
                  <BiSolidComment />
                  <span className="btn btn-bgMain __btn-interaction">2</span>
                </Button>

              </section>
            </section>
          </article>
          
        </section>

        {/* CARD 3 */}
        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Elder Ring</HeaderTitle>
            <Link
              to="./#"
              className="icon __primary">
              <TbWorld className="icon" />
            </Link>
            <Link
              to="./#"
              className="icon __primary">
              <FaStoreAlt className="icon" />
            </Link>
          </article>

          <article className="body-content-subtitle">
            <div className="content-user">
              <img src={avatar} className="avatar" alt="Avatar User" />
              Duh Nunes
              <span className="review-counter">50.600 views</span>
            </div>
            <div className="date-time">Posted on 12 Sep 2023</div>
          </article>

          <article className="body-content-image">
            <Badge css="__live">
              <span className="circle"></span>LIVE
            </Badge>
            <img src={gameImage2} alt="Elder Ring" />
            <PlayButton />
          </article>
          
        </section>

      </Body>
      <Footer />
    </>
  );
}
