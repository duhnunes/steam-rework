import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import logoWin from '../../../../assets/img/Windows8.svg';

export default function CardFreeToPlay({cardImg, gameTitle}) {
  return(
    <article className="card-body">
      <img src={cardImg} alt="Game Card Offer" className="card-img" />
            
      <h3 className="card-title">{gameTitle}</h3>

      <section className="card-info">
        <img src={logoWin} alt="Compatible Platform" className="card-info-win" />


        <section className="card-info-price">
          <span className="card-info__time-offer __text-free">Free</span>
          <span className="btn card-info__discount __btn-playnow">Play Now</span>
        </section>

      </section>
    </article>
  );
}

CardFreeToPlay.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string
}.isRequired;
