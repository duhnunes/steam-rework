import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import logoWin from '../../../../assets/img/Windows8.svg';
import wishlist from '../../../../assets/img/Favorite border.svg';

export default function CardTopSeller({cardImg, gameTitle, price}) {
  return(
    <article className="card-body __topseler-card-inside-grid">
      <img src={cardImg} alt="Game Card Offer" className="card-img __topseller-img" />

      <section className="card-info __topseller-card-info">
        <h3 className="card-title">{gameTitle}</h3>
        
        <article className="card-sub__topseller">
          <img src={logoWin} alt="Compatible Platform" className="card-info-win" />

          <section className="card-info-price">
            <span className="__newtrading-price">{price}</span>

            <span className="btn btn-dark card-info__wishlist">
              <img src={wishlist} alt="Wishlist this Game" />
            </span>
          </section>
        </article>

      </section>
    </article>
  );
}

CardTopSeller.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string,
  price: propTypes.string
}.isRequired;
