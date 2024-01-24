
import '../SectionCards.css';
import propTypes from 'prop-types';

import PrevNext from '../../../../components/PrevNext/PrevNext';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';
import CardFreeToPlay from '../../Cards/CardFreetoPlay/CardFreetoPlay';

// Images
import card1 from '../../../../assets/img/freetoplay1.png';
import card2 from '../../../../assets/img/freetoplay2.png';
import card3 from '../../../../assets/img/freetoplay3.png';

export default function SpecialOffers({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area">

          <CardFreeToPlay
            cardImg={card1}
            gameTitle="Destiny 2"
          />
          <CardFreeToPlay
            cardImg={card2}
            gameTitle="Halo Infinite"
          />
          <CardFreeToPlay
            cardImg={card3}
            gameTitle="Team Fortress 2"
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

SpecialOffers.propTypes = {
  headerTitle: propTypes.string
}.isRequired;
