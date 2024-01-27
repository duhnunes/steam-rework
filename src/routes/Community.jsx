import GeneralMenu from '../layout/GeneralMenu/GeneralMenu';

// Icons & Imagens
import { TbWorld } from 'react-icons/tb';
import { FaStoreAlt } from 'react-icons/fa';
import { IoMdThumbsUp } from 'react-icons/io';
import { BiSolidComment } from 'react-icons/bi';
import avatar from '../assets/img/logao.jpg';
import gameImage from '../assets/img/community/01.png';


// Componenets
import Footer from '../layout/Footer/Footer';
import Header from '../layout/ContentLayout/Header/Header';
import Navbar from '../layout/Navbar/Navbar';
import {List, ListItem} from '../components/List/List';
import Body from '../layout/Body/Body';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';

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
          <p>Component SearchBar here</p>
        </section>

        <section className="container __community-recoil">
          <Navbar css="__nav-community">
            <section className="links">
              <List css="">
                <ListItem css="__btn active">All</ListItem>
                <ListItem css="__btn">Screenshots</ListItem>
                <ListItem css="__btn">Artworks</ListItem>
                <ListItem css="__btn">Workshop</ListItem>
                <ListItem css="__btn">Broadcasts</ListItem>
                <ListItem css="__btn">Videos</ListItem>
                <ListItem css="__btn">News</ListItem>
                <ListItem css="__btn">Guides</ListItem>
                <ListItem css="__btn">Reviews</ListItem>
              </List>
            </section>

            <section className="filters">
              <List css="">
                <ListItem css="">Viewing</ListItem>
                <ListItem css="__btn active">Most Popular</ListItem>
                <ListItem css="__btn">Most Recent</ListItem>
              </List>
            </section>
          </Navbar>
        </section>
      </Header>

      {/* BODY */}
      <Body css="container __community-recoil community-body">
        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Elite Dangerous</HeaderTitle>
            <TbWorld className="icon __primary btn" />
            <FaStoreAlt className="icon __primary btn" />
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
            <div className="body-content-comment">
              me when uuuuh space
            </div>
            <div className="body-content-interaction">
              <span className="btn btn-bgMain __btn-interaction">
                <IoMdThumbsUp />
                <span className="interaction-counter">5</span>
              </span>
              <span className="btn btn-bgMain __btn-interaction">
                <BiSolidComment />
                <span className="interaction-counter">2</span>
              </span>
            </div>
          </article>
          
        </section>

        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Elite Dangerous</HeaderTitle>
            <TbWorld className="icon __primary btn" />
            <FaStoreAlt className="icon __primary btn" />
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
            <div className="body-content-comment">
              me when uuuuh space
            </div>
            <div className="body-content-interaction">
              <span className="btn btn-bgMain __btn-interaction">
                <IoMdThumbsUp />
                <span className="interaction-counter">5</span>
              </span>
              <span className="btn btn-bgMain __btn-interaction">
                <BiSolidComment />
                <span className="interaction-counter">2</span>
              </span>
            </div>
          </article>
          
        </section>

        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Elite Dangerous</HeaderTitle>
            <TbWorld className="icon __primary btn" />
            <FaStoreAlt className="icon __primary btn" />
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
            <div className="body-content-comment">
              me when uuuuh space
            </div>
            <div className="body-content-interaction">
              <span className="btn btn-bgMain __btn-interaction">
                <IoMdThumbsUp />
                <span className="interaction-counter">5</span>
              </span>
              <span className="btn btn-bgMain __btn-interaction">
                <BiSolidComment />
                <span className="interaction-counter">2</span>
              </span>
            </div>
          </article>
          
        </section>

        <section className="body-content">
          <article className="body-content-header">
            <HeaderTitle css="">Elite Dangerous</HeaderTitle>
            <TbWorld className="icon __primary btn" />
            <FaStoreAlt className="icon __primary btn" />
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
            <div className="body-content-comment">
              me when uuuuh space
            </div>
            <div className="body-content-interaction">
              <span className="btn btn-bgMain __btn-interaction">
                <IoMdThumbsUp />
                <span className="interaction-counter">5</span>
              </span>
              <span className="btn btn-bgMain __btn-interaction">
                <BiSolidComment />
                <span className="interaction-counter">2</span>
              </span>
            </div>
          </article>
          
        </section>

      </Body>
      <Footer />
    </>
  );
}
