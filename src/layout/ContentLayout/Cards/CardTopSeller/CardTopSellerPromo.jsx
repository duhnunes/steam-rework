import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import logoWin from '../../../../assets/img/Windows8.svg';
import wishlist from '../../../../assets/img/Favorite border.svg';
import Button from '../../../../components/Button/Button';

export default function CardTopSellerPromo({cardImg, gameTitle, price, off, priceNew}) {
  return(
    <article className="card-body __topseler-card-inside-grid">
      <img src={cardImg} alt="Game Card Offer" className="card-img __topseller-img" />

      <section className="card-info __topseller-card-info">
        <h3 className="card-title">{gameTitle}</h3>
        
        <article className="card-sub__topseller">
          <img src={logoWin} alt="Compatible Platform" className="card-info-win" />

          <section className="card-info-price">
            <span className="card-info__discount">{off}</span>

            <article className="card-info__discount-diff">
              <span className="discount-before">{priceNew}</span>
              <span className="discount-after">{price}</span>
            </article>
          </section>

          <Button
            css="btn btn-dark"
            id="addwishlist">
            <img src={wishlist} alt="Wishlist this Game" />
          </Button>
        </article>

      </section>
    </article>
  );
}

CardTopSellerPromo.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string,
  price: propTypes.string,
  priceNew: propTypes.string,
  off: propTypes.string
}.isRequired;
