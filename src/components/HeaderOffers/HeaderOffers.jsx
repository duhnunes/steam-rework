import Button from '../Button/Button';
import H2 from '../H2/H2';
import './HeaderOffers.css';

import propTypes from 'prop-types';

export default function HeaderOffers({title}) {
  return(
    <div className="headerOffers-area">
      <H2 content={title} />
      <Button 
        css="btn btn-border"
        id="seeMore">See more</Button>
    </div>
  );
}

HeaderOffers.propTypes = {
  title: propTypes.string
}.isRequired;
