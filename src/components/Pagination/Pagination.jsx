import Button from '../Button/Button';
import './Pagination.css';

export default function Pagination() {
  return(
    <section className="pagination">
      <Button
        css="btn btn-dark disabled"
        id="prevPage">
        Prev
      </Button>

      <Button
        css="btn btn-dark"
        id="nextPage">
        Next
      </Button>
    </section>
  );
}
