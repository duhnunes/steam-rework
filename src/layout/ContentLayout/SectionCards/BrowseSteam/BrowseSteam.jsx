import PrevNext from '../../../../components/PrevNext/PrevNext';
import '../SectionCards.css';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';
import propTypes from 'prop-types';

import CardCategory from '../../Cards/CardCategory/CardCategory';

// Images
import card1 from '../../../../assets/img/action-category.png';
import card2 from '../../../../assets/img/rpg-category.png';
import card3 from '../../../../assets/img/freetoplay-category.png';
import card4 from '../../../../assets/img/anime-category.png';
import card5 from '../../../../assets/img/anime-category.png';

export default function BrowseSteam({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area">

          <CardCategory 
            cardImg={card1}
            contentTitle="Action"
          />
          <CardCategory
            cardImg={card2}
            contentTitle="Rpg"
          />
          <CardCategory
            cardImg={card3}
            contentTitle="Free-to-Play"
          />
          <CardCategory
            cardImg={card4}
            contentTitle="Anime"
          />
          <CardCategory
            cardImg={card5}
            contentTitle="Co-Op"
          />
          
        </section>

        <PrevNext angle="arrow next" id="prevNext" />
      </section>

      {/* Pagination */}
      <section className="featured-bar-timer">
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
      </section>
    </section>
  );
}

BrowseSteam.propTypes = {
  headerTitle: propTypes.string
}.isRequired;
