import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import logoWin from '../../../../assets/img/Windows8.svg';
import wishlist from '../../../../assets/img/Favorite border.svg';

export default function CardUnder5({cardImg, gameTitle, temp, off, price, priceNew}) {
  return(
    <article className="card-body">
      <img src={cardImg} alt="Game Card Offer" className="card-img" />
            
      <h3 className="card-title">{gameTitle}</h3>

      <section className="card-info">
        <img src={logoWin} alt="Compatible Platform" className="card-info-win" />

        <section className="card-info-price">
          <span className="card-info__time-offer">{temp}</span>
          <span className="card-info__discount">{off}</span>

          <article className="card-info__discount-diff">
            <span className="discount-before">{price}</span>
            <span className="discount-after">{priceNew}</span>
          </article>
        </section>

        <span className="btn btn-dark card-info__wishlist">
          <img src={wishlist} alt="Wishlist this Game" />
        </span>
      </section>
    </article>
  );
}

CardUnder5.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string,
  temp: propTypes.string,
  off: propTypes.string,
  price: propTypes.string,
  priceNew: propTypes.string
}.isRequired;
