import './Footer.css';

import logoValve from '../../assets/img/logo-valve.svg';
import logoSteam from '../../assets/img/logo-steam.svg';

import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return(
    <footer className="footer">
        
      <section className="footer-body">
          
        <article className="footer-menu">
          <section className="footer-brand-area">
            <article className="footer-brand">
              <img src={logoValve} alt="Logo Valve" className="logoValve" />
              <img src={logoSteam} alt="Logo Steam" className="logoSteam" />
            </article>
            
            <article className="footer-disclaimer">
              <p className="disclaimer-text">
              © 2023 Valve Corporation. All rights reserved.
              </p>
              <p className="disclaimer-text">
                All trademarks are property of their respective owners in the US and other countries.
              </p>
              <p className="disclaimer-text">
                VAT included in all prices where applicable.
              </p>
            </article>

          </section>

          <section className="footer-menu-box">
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  About Valve
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Jobs
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Steamworks
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Steam Distribution
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Support
                </a>
              </li>
            </ul>
          </section>

          <section className="footer-menu-box">
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Legal
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Steam Subscriber Agreement
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Refunds
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="./#" className="footer-menu-link">
                  Cookies
                </a>
              </li>
            </ul>
          </section>
          
        </article>
          
        <article className="footer-social">
          <span className="btn btn-social">
            <FaFacebookF className="btn-social-icon" />
          </span>
          <span className="btn btn-social">
            <FaXTwitter className="btn-social-icon" />
          </span>
        </article>
          
      </section>

    </footer>
  );
}
