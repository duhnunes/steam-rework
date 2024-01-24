
import '../SectionCards.css';
import propTypes from 'prop-types';

import PrevNext from '../../../../components/PrevNext/PrevNext';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';
import CardRecentlyUpdated from '../../Cards/CardRecentlyUpdated/CardRecentlyUpdated';


// Images
import card1 from '../../../../assets/img/recently-updated/01.png';
import card2 from '../../../../assets/img/recently-updated/02.png';
import card3 from '../../../../assets/img/recently-updated/03.png';
import card4 from '../../../../assets/img/recently-updated/04.png';

export default function RecentlyUpdated({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area">

          <CardRecentlyUpdated
            cardImg={card1}
            gameTitle="CyberPunk 2077"
            cardText="The free Update 2.0 brings brand new ways to play Cyberpunk 2077..."
          />
          <CardRecentlyUpdated
            cardImg={card2}
            gameTitle="Starfild"
            cardText="A new update has been released for Starfield on all platforms..."
          />
          <CardRecentlyUpdated
            cardImg={card3}
            gameTitle="The Elder Scrolls® Online"
            cardText="Conquer Tamriel’s Fears and Earn Special Rewards during the Witches Festival Event..."
          />
          <CardRecentlyUpdated
            cardImg={card4}
            gameTitle="New World"
            cardText="Nightveil Hallow returns as Baalphazu, Marquis of Terror rises once again on October 18..."
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

RecentlyUpdated.propTypes = {
  headerTitle: propTypes.string
}.isRequired;
