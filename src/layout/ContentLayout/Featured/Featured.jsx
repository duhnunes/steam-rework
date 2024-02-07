import './Featured.css';
import { Link } from 'react-router-dom';


// ICONS AND IMAGES
import featuredMain from '../../../assets/img/image48.png';
import otherImageGame from '../../../assets/img/image49.png';
import otherImageGame2 from '../../../assets/img/image50.png';
import otherImageGame3 from '../../../assets/img/image52.png';
import otherImageGame4 from '../../../assets/img/image51.png';
import logoSys from '../../../assets/img/Windows8.svg';
import favoriteWishlist from '../../../assets/img/Favorite border.svg';

// COMPONENTS
import PrevNext from '../../../components/PrevNext/PrevNext';
import H2 from '../../../components/H2/H2';
import Button from '../../../components/Button/Button';

export default function Featured() {
  return(
    <section className="featured-area">

      <H2 content="Featured" />
      {/* Feature */}
      <section className="featured-box">

        <PrevNext angle="arrow prev" id="prevPage" />

        {/* Featured Content */}

        <section>

          <Link to="./#" className="featured-inside-area">
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
                  <Button
                    css="btn btn-dark btn-category"
                    id="">
                    Souls-like
                  </Button>
                  <Button
                    css="btn btn-dark btn-category"
                    id="">
                    RPG
                  </Button>
                  <Button
                    css="btn btn-dark btn-category"
                    id="">
                    Dark Fantasy
                  </Button>
                  <Button
                    css="btn btn-dark btn-category"
                    id="">
                    Open-world
                  </Button>
                  <Button
                    css="btn btn-dark btn-category"
                    id="">
                    +
                  </Button>
                </article>

                {/* OS */}
                <article className="category-game-os">
                  <img src={logoSys} alt="OS Logo" />
                </article>
              </section>

              {/* Action: Wishlist/Price/Buy */}
              <section className="action-wishlist-buy">
                {/* Wishlist Button */}
                <Button
                  css="btn btn-dark btn-category"
                  id="addwishlist">
                  <span className="wishlist">Wishlist</span>
                  <img
                    className="svHeart"
                    src={favoriteWishlist}
                    alt="Heart to Wishlist Game" />
                </Button>

                {/* Price and Buy */}
                <article className="featured-buy">
                  <span className="featured-price">$59.99</span>
                  <Button
                    css="btn btn-secondary btn-buy"
                    id="buynow">
                    Buy Now
                  </Button>
                </article>
              </section>
            </article>
          </Link>
        </section>

        <PrevNext angle="arrow next" id="nextPage" />
      </section>
      
      {/* Pagination Cards */}
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
