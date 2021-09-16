import React from 'react';
import classNames from 'classnames';
// style
import './style.scss';

type ButtonProps = {
  onClick?: () => void;
  color: 'black' | 'white';
};

const Button: React.FC<ButtonProps> = ({ onClick, color, children }) => {
  return (
    <button className={classNames('btn', color)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
