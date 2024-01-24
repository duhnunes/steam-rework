import '../Cards.css';
import propTypes from 'prop-types';

export default function CardCategory({cardImg, contentTitle}){
  return(
    <article className="card-body __cat">
      <h3 className="cat-title">{contentTitle}</h3>
      <img src={cardImg} alt="Game Card Offer" className="card-img" />
    </article>
  );
}

CardCategory.propTypes = {
  cardImg: propTypes.string,
  contentTitle: propTypes.string
}.isRequired;
