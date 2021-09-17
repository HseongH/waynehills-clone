import React from 'react';
// Components
import Header from './Header';
import Summary from './Summary';
import Action from './Action';
import Footer from './Footer';

export type MainProps = {
  getVideoList: () => void;
};

const MainPresenter: React.FC<MainProps> = (props) => {
  const { getVideoList } = props;

  return (
    <>
      <Header />
      <Summary />
      <Action getVideoList={getVideoList} />
      <Footer />
    </>
  );
};

export default MainPresenter;
