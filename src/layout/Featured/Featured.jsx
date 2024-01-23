import './Featured.css';

import featuredMain from '../../assets/img/image48.png';
import otherImageGame from '../../assets/img/image49.png';
import otherImageGame2 from '../../assets/img/image50.png';
import otherImageGame3 from '../../assets/img/image52.png';
import otherImageGame4 from '../../assets/img/image51.png';
import logoSys from '../../assets/img/Windows8.svg';
import favoriteWishlist from '../../assets/img/Favorite border.svg';
import PrevNext from '../../components/PrevNext/PrevNext';

export default function Featured() {
  return(
    <section className="featured-area">
      {/* Title */}
      <h2 className="title-Main">Featured</h2>
      {/* Feature */}
      <section className="featured-box">
        {/* Arrow Left */}
        <PrevNext angle="arrow prev" id="prevPage" />
        {/* Featured Content */}
        <section className="featured-inside-area">
          {/* Big Image */}
          <article className="featured-big-image">
            <img src={featuredMain} alt="Featured Game Big" />
          </article>
          {/* Featured Game Info */}
          <article className="featured-game-info">
            {/* Game Info */}
            <section className="featured-game-box">
              <h3 className="featured-game-title">Elder Ring</h3>
              <p>The new fantasy action RPG, rise, Tarnished, and be guided by grace to brandish the power of the Elder Ring and become an Elden Lord in the Lands Between.</p>
            </section>
            {/* Featured Game Images */}
            <section className="featured-game-imgs">
              <img src={otherImageGame} alt="Another screenshot from the same Game" />
              <img src={otherImageGame2} alt="Another screenshot from the same Game" />
              <img src={otherImageGame3} alt="Another screenshot from the same Game" />
              <img src={otherImageGame4} alt="Another screenshot from the same Game" />
            </section>
            {/* Category */}
            <section className="featured-category-area">
              {/* Category Buttons */}
              <article className="category-buttons">
                <span className="btn btn-dark btn-category">Souls-like</span>
                <span className="btn btn-dark btn-category">RPG</span>
                <span className="btn btn-dark btn-category">Dark Fantasy</span>
                <span className="btn btn-dark btn-category">Open-world</span>
                <span className="btn btn-dark btn-category">+</span>
              </article>
              {/* OS */}
              <article className="category-game-os">
                <img src={logoSys} alt="OS Logo" />
              </article>
            </section>
            {/* Action: Wishlist/Price/Buy */}
            <section className="action-wishlist-buy">
              {/* Wishlist Button */}
              <div className="btn btn-dark btn-category">
                <span className="wishlist">Wishlist</span>
                <img className="svgHeart" src={favoriteWishlist} alt="Heart to Favorite" />
              </div>
              {/* Price and Buy */}
              <article className="featured-buy">
                <span className="featured-price">$59.99</span>
                <span className="btn btn-dark btn-secondary btn-buy">Buy Now</span>
              </article>
            </section>
          </article>
        </section>
        {/* Arrow Right */}
        <PrevNext angle="arrow next" id="nextPage" />
      </section>
      {/* Bars with time */}
      <section className="featured-bar-timer">
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
        <span className="btn btn-timer"></span>
      </section>

    </section>
  );
}
