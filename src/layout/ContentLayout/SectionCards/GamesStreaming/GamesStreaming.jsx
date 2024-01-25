
import '../SectionCards.css';
import propTypes from 'prop-types';

import PrevNext from '../../../../components/PrevNext/PrevNext';
import CardGamesStreaming from '../../Cards/CardGamesStreaming/CardGamesStreaming';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';

// Images
import card1 from '../../../../assets/img/games-streaming/01.png';
import card2 from '../../../../assets/img/games-streaming/02.png';
import card3 from '../../../../assets/img/games-streaming/03.png';

export default function GamesStreaming({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area">

          <CardGamesStreaming
            cardImg={card1}
            gameTitle="Cities Skylines II"
            counter="27"
          />

          <CardGamesStreaming
            cardImg={card2}
            gameTitle="Warhammer: Vermintide II"
            counter="12"
          />

          <CardGamesStreaming
            cardImg={card3}
            gameTitle="Euro Truck Simulator 2"
            counter="20"
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

GamesStreaming.propTypes = {
  headerTitle: propTypes.string
}.isRequired;
