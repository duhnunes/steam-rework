import Button from '../../../components/Button/Button';
import H2 from '../../../components/H2/H2';
import PrevNext from '../../../components/PrevNext/PrevNext';
import './SpecialOffers.css';

// Images
import logoWin from '../../../assets/img/Windows8.svg';
import wishlist from '../../../assets/img/Favorite border.svg';

import card1 from '../../../assets/img/imageCard1.png';
import card2 from '../../../assets/img/imageCard2.png';
import card3 from '../../../assets/img/imageCard3.png';

export default function SpecialOffers() {
  return(
    <section className="offers-area">
      <div className="offers-area__header-title">
        <H2 content="Special Offers" />
        <Button type="button" nameClass="btn btn-dark btn-see-more" value="See more" />
      </div>
      
      <section className="offers-box">
        <PrevNext angle="arrow prev" id="prevPage" />

        <section className="offers-cards-area">
          {/* CARD 1 */}
          <article className="card-body">
            <img src={card1} alt="Game Card Offer" className="card-img" />
            
            <h3 className="card-title">The Last of Us: Part 1</h3>

            <section className="card-info">
              <img src={logoWin} alt="Compatible Platform" className="card-info-win" />

              <span className="card-info__time-offer">
                Until Nov 2
              </span>

              <section className="card-info-price">
                <span className="card-info__discount">-20%</span>

                <article className="card-info__discount-diff">
                  <span className="discount-before">$59.99</span>
                  <span className="discount-after">$47.99</span>
                </article>
              </section>

              <span className="btn btn-dark card-info__wishlist">
                <img src={wishlist} alt="Wishlist this Game" />
              </span>
            </section>
          </article>
          
          {/* CARD 2 */}
          <article className="card-body">
            <img src={card2} alt="Game Card Offer" className="card-img" />
            
            <h3 className="card-title">Iratus: Lord of the Dead</h3>

            <section className="card-info">
              <img src={logoWin} alt="Compatible Platform" className="card-info-win" />

              <span className="card-info__time-offer">
                Until Nov 6
              </span>

              <section className="card-info-price">
                <span className="card-info__discount">-87%</span>

                <article className="card-info__discount-diff">
                  <span className="discount-before">$29.99</span>
                  <span className="discount-after">$3.89</span>
                </article>
              </section>

              <span className="btn btn-dark card-info__wishlist">
                <img src={wishlist} alt="Wishlist this Game" />
              </span>
            </section>
          </article>
          
          {/* CARD 3 */}
          <article className="card-body">
            <img src={card3} alt="Game Card Offer" className="card-img" />
            
            <h3 className="card-title">Beyonde: Two Souls</h3>

            <section className="card-info">
              <img src={logoWin} alt="Compatible Platform" className="card-info-win" />

              <span className="card-info__time-offer">
                Only Today!
              </span>

              <section className="card-info-price">
                <span className="card-info__discount">-60%</span>

                <article className="card-info__discount-diff">
                  <span className="discount-before">$19.99</span>
                  <span className="discount-after">$7.99</span>
                </article>
              </section>

              <span className="btn btn-dark card-info__wishlist">
                <img src={wishlist} alt="Wishlist this Game" />
              </span>
            </section>
          </article>
          
        </section>

        <PrevNext angle="arrow next" id="prevNext" />
      </section>

      {/* Pagination */}
      <section className="featured-bar-timer">
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
      </section>
    </section>
  );
}
