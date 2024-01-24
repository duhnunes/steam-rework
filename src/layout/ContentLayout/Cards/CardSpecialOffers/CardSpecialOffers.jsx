import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import logoWin from '../../../../assets/img/Windows8.svg';
import wishlist from '../../../../assets/img/Favorite border.svg';

export default function CardGames({cardImg, gameTitle}) {
  return(
    <article className="card-body">
      <img src={cardImg} alt="Game Card Offer" className="card-img" />
            
      <h3 className="card-title">{gameTitle}</h3>

      <section className="card-info">
        <img src={logoWin} alt="Compatible Platform" className="card-info-win" />

        <span className="card-info__time-offer">
                Until Nov 2
        </span>

        <section className="card-info-price">
          <span className="card-info__discount">-20%</span>

          <article className="card-info__discount-diff">
            <span className="discount-before">$59.99</span>
            <span className="discount-after">$47.99</span>
          </article>
        </section>

        <span className="btn btn-dark card-info__wishlist">
          <img src={wishlist} alt="Wishlist this Game" />
        </span>
      </section>
    </article>
  );
}

CardGames.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string
}.isRequired;
