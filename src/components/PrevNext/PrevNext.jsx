import './PrevNext.css';
import propTypes from 'prop-types';

const PrevNext = ({angle, id}) => {
  return(
    <>
      <div className="prevNext-area">
        <i className={angle} id={id}></i>
      </div>
    </>
  );
};

export default PrevNext;

PrevNext.propTypes = {
  angle: propTypes.string,
  id: propTypes.string,
}.isRequired;
