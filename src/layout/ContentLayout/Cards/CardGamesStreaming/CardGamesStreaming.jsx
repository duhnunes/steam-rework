import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import { VscEye } from 'react-icons/vsc';
import { FaPlay } from 'react-icons/fa';
import Button from '../../../../components/Button/Button';

export default function CardGamesStreaming({cardImg, gameTitle, counter}) {
  return(
    <article className="card-body">
      <figure className="card-player">
        <img src={cardImg} alt="Game Card Offer" className="card-img" />
        <figcaption className="card-player-btn">
          <FaPlay />
        </figcaption>
      </figure>
            
      <h3 className="card-title">{gameTitle}</h3>

      <section className="card-info">
        <article className="card-info-viewers">
          <VscEye className="card-info-viewers-icon" />
          <div className="card-info-viewers-counter">
            <span id="viewersCounter">{counter}</span>
            <span id="viewersCounter">k</span>
          </div>
        </article>

        <Button
          type="button"
          nameClass="btn btn-dark"
          value="Store Page"
        />
      </section>
    </article>
  );
}

CardGamesStreaming.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string,
  counter: propTypes.number
}.isRequired;
