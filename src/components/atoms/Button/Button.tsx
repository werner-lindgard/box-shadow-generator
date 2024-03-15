import React from 'react';

import { ColorType } from 'src/theme';
import { ButtonContainer } from './Button.styles';

type ButtonProps = {
  children?: React.ReactNode;
  color: ColorType;
  onClick?: () => void;
};

const defaultProps = {
  color: 'primary',
  onClick: () => {},
};

const Button = ({ children, color, onClick }: ButtonProps) => {

  return (
    <ButtonContainer $color={color} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

Button.defaultProps = defaultProps;

export { Button };
