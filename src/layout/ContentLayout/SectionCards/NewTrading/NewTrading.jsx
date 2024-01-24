
import '../SectionCards.css';
import propTypes from 'prop-types';

import PrevNext from '../../../../components/PrevNext/PrevNext';
import CardNewTrading from '../../Cards/CardNewTrading/CardNewTrading';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';

// Images
import card1 from '../../../../assets/img/New&Trading/01.png';
import card2 from '../../../../assets/img/New&Trading/02.png';
import card3 from '../../../../assets/img/New&Trading/03.png';

export default function NewTrading({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area">

          <CardNewTrading
            cardImg={card1}
            gameTitle="Cities Skylines II"
            price="$49.99"
          />

          <CardNewTrading
            cardImg={card2}
            gameTitle="Wildmender"
            price="$24.99"
          />

          <CardNewTrading
            cardImg={card3}
            gameTitle="The Bloodline"
            price="$19.99"
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

NewTrading.propTypes = {
  headerTitle: propTypes.string
}.isRequired;
