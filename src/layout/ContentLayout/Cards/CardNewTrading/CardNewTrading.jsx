import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import logoWin from '../../../../assets/img/Windows8.svg';
import wishlist from '../../../../assets/img/Favorite border.svg';
import Button from '../../../../components/Button/Button';

export default function CardNewTrading({cardImg, gameTitle, price}) {
  return(
    <article className="card-body">
      <img src={cardImg} alt="Game Card Offer" className="card-img" />
            
      <h3 className="card-title">{gameTitle}</h3>

      <section className="card-info">
        <img src={logoWin} alt="Compatible Platform" className="card-info-win" />


        <section className="card-info-price">
          <span className="__newtrading-price">{price}</span>
        
          <Button
            css="btn btn-dark"
            id="addwishlist">
            <img
              src={wishlist}
              alt="Wishlist this Game" />
          </Button>

        </section>

      </section>
    </article>
  );
}

CardNewTrading.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string,
  price: propTypes.string
}.isRequired;
