import React from 'react';
// elements
import { Container } from '../../../elements';
// style
import './style.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <Container>
          <p className="license">powered by</p>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Shutterstock_logo.svg"
            alt="Shutterstock logo"
            className="stock-logo"
          />
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <div className="terms-of-use">
            <button className="btn btn--terms">Terms of Use</button>
          </div>

          <div className="footer__info">
            <p className="address">
              B1, E10Dong, 70, Magokjungang 10-ro, Gangseo-gu, Seoul, Republic
              of Korea
            </p>

            <p className="founder">Founder : John (Yi.su.min)</p>

            <p className="contact">Email : waynehills.ventures@gmail.com</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
