import React from 'react';
// Components
import Header from './Header';
import Summary from './Summary';
import Action from './Action';
import Footer from './Footer';

const MainPresenter: React.FC = (props) => {
  return (
    <>
      <Header />
      <Summary />
      <Action />
      <Footer />
    </>
  );
};

export default MainPresenter;
