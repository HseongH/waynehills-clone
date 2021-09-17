import React from 'react';
// router
import { Link } from 'react-router-dom';
// elements
import { Button, Container } from '../../../elements';
// style
import './style.scss';

const Header = () => {
  return (
    <header>
      <Container>
        <h1 className="logo">
          <Link to="/">
            <img
              src="http://ttv.waynehills.co/assets/logo.png"
              alt="waynehills ventures"
              className="logo--img"
            />
          </Link>
        </h1>

        <Button color="black" size="middle">
          <Link to="/login">Sign in</Link>
        </Button>
      </Container>
    </header>
  );
};

export default Header;
