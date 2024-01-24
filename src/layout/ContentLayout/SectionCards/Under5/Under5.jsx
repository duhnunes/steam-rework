
import '../SectionCards.css';
import propTypes from 'prop-types';

import PrevNext from '../../../../components/PrevNext/PrevNext';
import CardUnder5 from '../../Cards/CardUnder5/CardUnder5';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';

// Images
import card1 from '../../../../assets/img/under5/01.png';
import card2 from '../../../../assets/img/under5/02.png';
import card3 from '../../../../assets/img/under5/03.png';

export default function Under5({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area">

          <CardUnder5
            cardImg={card1}
            gameTitle="American Truck Simulator"
            temp="Until Oct 31"
            off="-75%"
            price="$19.99"
            priceNew="$4.99"
          />

          <CardUnder5
            cardImg={card2}
            gameTitle="Batman™: Arkham Knight"
            temp="Until Oct 31"
            off="-80%"
            price="$19.99"
            priceNew="$3.99"
          />

          <CardUnder5
            cardImg={card3}
            gameTitle="Mortal Kombat 11"
            temp="Until Oct 31"
            off="-90%"
            price="$49.99"
            priceNew="$4.99"
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

Under5.propTypes = {
  headerTitle: propTypes.string
}.isRequired;
