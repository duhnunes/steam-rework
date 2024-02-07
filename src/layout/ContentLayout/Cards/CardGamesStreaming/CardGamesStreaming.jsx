import '../Cards.css';
import propTypes from 'prop-types';

// Icons
import { VscEye } from 'react-icons/vsc';
import Button from '../../../../components/Button/Button';
import Badge from '../../../../components/Badge/Badge';
import PlayButton from '../../../../components/PlayButton/PlayButton';

export default function CardGamesStreaming({cardImg, gameTitle, counter}) {
  return(
    <article className="card-body">
      <figure className="card-player">
        <Badge css="__live">
          <span className="circle"></span>LIVE
        </Badge>
        <img src={cardImg} alt="Game Card Offer" className="card-img" />
        <PlayButton />
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
          css="btn btn-dark"
          id="storepage">
            Store Page
        </Button>
      </section>
    </article>
  );
}

CardGamesStreaming.propTypes = {
  cardImg: propTypes.string,
  gameTitle: propTypes.string,
  counter: propTypes.number
}.isRequired;
