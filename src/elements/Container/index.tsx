import React from 'react';
// style
import './style.scss';

const Container: React.FC = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
