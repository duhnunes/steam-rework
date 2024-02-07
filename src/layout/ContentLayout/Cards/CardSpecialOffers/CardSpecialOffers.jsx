import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import logoWin from '../../../../assets/img/Windows8.svg';
import wishlist from '../../../../assets/img/Favorite border.svg';
import Button from '../../../../components/Button/Button';

export default function CardGames({cardImg, gameTitle, temp, off, priceNew, price}) {
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

        <Button
          css="btn btn-dark"
          id="addFavorite">
          <img src={wishlist} alt="Wishlist this Game" />
        </Button>
      </section>
    </article>
  );
}

CardGames.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string,
  temp: propTypes.string,
  off: propTypes.string,
  price: propTypes.string,
  priceNew: propTypes.string
}.isRequired;
