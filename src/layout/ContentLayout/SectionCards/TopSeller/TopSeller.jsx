
import '../SectionCards.css';
import propTypes from 'prop-types';

import PrevNext from '../../../../components/PrevNext/PrevNext';
import CardTopSellerPromo from '../../Cards/CardTopSeller/CardTopSellerPromo';
import CardTopSeller from '../../Cards/CardTopSeller/CardTopSeller';
import HeaderOffers from '../../../../components/HeaderOffers/HeaderOffers';

// Images
import card1 from '../../../../assets/img/topsellers/01.png';
import card2 from '../../../../assets/img/topsellers/02.png';
import card3 from '../../../../assets/img/topsellers/03.png';
import card4 from '../../../../assets/img/topsellers/04.png';
import card5 from '../../../../assets/img/topsellers/05.png';
import card6 from '../../../../assets/img/topsellers/06.png';

export default function TopSeller({headerTitle}) {
  return(
    <section className="section-area">
      <HeaderOffers title={headerTitle} />
      
      <section className="section-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="section-cards-area __topseller-cards-grid">

          <CardTopSeller
            cardImg={card1}
            gameTitle="Baldur's Gate"
            price="$59.99"
          />

          <CardTopSeller
            cardImg={card2}
            gameTitle="Rust"
            price="$39.99"
          />

          <CardTopSeller
            cardImg={card3}
            gameTitle="Call of Duty®"
            price="$69.99"
          />

          <CardTopSellerPromo
            cardImg={card4}
            gameTitle="Fallout 76"
            price="$39.99"
            priceNew="$7.99"
            off="-80%"
          />

          <CardTopSeller
            cardImg={card5}
            gameTitle="Meta Gear & Metal Gear 2: Solid Snake"
            price="$19.99"
          />

          <CardTopSellerPromo
            cardImg={card6}
            gameTitle="Red Dead Redemption 2"
            price="$59.99"
            priceNew="$23.99"
            off="-60%"
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

TopSeller.propTypes = {
  headerTitle: propTypes.string
}.isRequired;
