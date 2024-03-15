import styled from 'styled-components';
import { ThemeProps } from 'src/theme';

const getHeaderHeight = ({ theme }: ThemeProps) => {
  return `${theme.header.height}`;
};

const getHeaderBackground = ({ theme }: ThemeProps) => {
  return `${theme.header.background}`;
};

const HeaderContainer = styled.div<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${getHeaderHeight};
  background: ${getHeaderBackground};
  z-index: -1;

  padding: 8px;
`;

const HeaderText = styled.div`
  font-family: 'Bubblegum Sans', cursive;
  font-size: 1.8rem;
  -webkit-text-stroke: 1px black;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export { HeaderContainer, HeaderText };
