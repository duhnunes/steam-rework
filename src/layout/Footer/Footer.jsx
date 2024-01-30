import './Footer.css';

import logoValve from '../../assets/img/logo-valve.svg';
import logoSteam from '../../assets/img/logo-steam.svg';

import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { List, ListItem } from '../../components/List/List';
import { Link } from 'react-router-dom';

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

          <List css="__column">
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  About Valve
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Jobs
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Steamworks
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Steam Distribution
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Support
              </Link>
            </ListItem>
          </List>

          <List css="__column">
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Privacy Policy
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Legal
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Steam Subscriber Agreement
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Refunds
              </Link>
            </ListItem>
            <ListItem css="__footer-item">
              <Link to="./#" className="footer-menu-link">
                  Cookies
              </Link>
            </ListItem>
          </List>
          
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
