import PrevNext from '../../../components/PrevNext/PrevNext';
import './SpecialOffers.css';
import CardGames from '../Cards/CardSpecialOffers/CardGames';
import HeaderOffers from '../../../components/HeaderOffers/HeaderOffers';
import propTypes from 'prop-types';

// Images
import card1 from '../../../assets/img/imageCard1.png';
import card2 from '../../../assets/img/imageCard2.png';
import card3 from '../../../assets/img/imageCard3.png';

export default function SpecialOffers({headerTitle}) {
  return(
    <section className="offers-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="offers-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="offers-cards-area">

          <CardGames cardImg={card1} />

          <CardGames cardImg={card2} />

          <CardGames cardImg={card3} />
          
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
