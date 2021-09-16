import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  color: 'black' | 'white';
};

const Button: React.FC<ButtonProps> = ({ color, children }) => {
  return <button className={classNames('btn', color)}>{children}</button>;
};

export default Button;
