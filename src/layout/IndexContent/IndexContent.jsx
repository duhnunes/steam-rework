import Featured from '../ContentLayout/Featured/Featured';
import SpecialOffers from '../ContentLayout/SpecialOffers/SpecialOffers';
import './IndexContent.css';

export default function IndexContent() {
  return(
    <main className="container">
      <Featured />
      <SpecialOffers />
    </main>
  );
}
