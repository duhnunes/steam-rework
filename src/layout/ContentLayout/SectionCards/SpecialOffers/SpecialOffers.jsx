
import '../SectionCards.css';
import propTypes from 'prop-types';

import PrevNext from '../../../../components/PrevNext/PrevNext';
import CardGames from '../../Cards/CardSpecialOffers/CardSpecialOffers';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';

// Images
import card1 from '../../../../assets/img/imageCard1.png';
import card2 from '../../../../assets/img/imageCard2.png';
import card3 from '../../../../assets/img/imageCard3.png';

export default function SpecialOffers({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area">

          <CardGames
            cardImg={card1}
            gameTitle="The Last of Us: Part 1"
          />

          <CardGames
            cardImg={card2}
            gameTitle="Iratus: Lord of the Dead"
          />

          <CardGames
            cardImg={card3}
            gameTitle="Beyond: Two Souls"
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
