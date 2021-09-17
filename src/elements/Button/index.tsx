import React from 'react';
import classNames from 'classnames';
// style
import './style.scss';

type ButtonProps = {
  onClick?: () => void;
  color?: 'black' | 'white' | 'purple';
  size?: 'middle' | 'large';
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  color,
  size,
  type,
  disabled,
  children,
}) => {
  return (
    <button
      className={classNames('btn', color, size)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
