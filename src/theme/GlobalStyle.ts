import { createGlobalStyle } from 'styled-components';
import { ITheme } from './models';

type ThemeProps = {
  theme?: ITheme;
};

const withBG = ({ theme }: ThemeProps) => {
  return `background-color: ${theme.palette.background}`;
};

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    color: #000;
    ${withBG};
  }
`;

export { GlobalStyle };
