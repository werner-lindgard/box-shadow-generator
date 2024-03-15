import React from 'react';

import { HeaderContainer, HeaderText } from './Header.styles';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderText>{children}</HeaderText>
    </HeaderContainer>
  );
};

export { Header };
