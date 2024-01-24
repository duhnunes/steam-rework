import '../Cards.css';
import propTypes from 'prop-types';


export default function CardRecentlyUpdated({cardImg, alt, gameTitle, cardText}) {
  return(
    <article className="card-body __recent-up">
      <img src={cardImg} alt={alt} className="card-img" />
            
      <h3 className="card-title __recent-title">{gameTitle}</h3>
      <p className="card-text __recent-text">{cardText}</p>

      <section className="card-info">
        <span className="btn btn-border">In Library</span>
        <span className="btn btn-dark btn-recent">View Updates</span>
      </section>
    </article>
  );
}

CardRecentlyUpdated.propTypes = {
  cardImg: propTypes.string,
  alt: propTypes.string,
  gameTitle: propTypes.string,
  cardText: propTypes.string
}.isRequired;
