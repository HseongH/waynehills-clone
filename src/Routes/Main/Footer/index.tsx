import React from 'react';
// elements
import { Container, Button } from '../../../elements';
// components
import Terms from './Terms';
// style
import './style.scss';

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

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
            <Button onClick={handleOpen}>Terms of Use</Button>
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

      {open ? <Terms setOpen={setOpen} /> : null}
    </footer>
  );
};

export default Footer;
