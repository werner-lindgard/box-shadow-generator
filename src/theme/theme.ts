import { ITheme } from "./models";

const theme: ITheme = {
  palette: {
    primary: {
      main: '#08f',
      light: '#0af',
      dark: '#06d',
      text: '#fff',
    },
    secondary: {
      main: '#c0c',
      light: '#e0c',
      dark: '#a0a',
      text: '#fff',
    },
    background: '#f5f6f7',
    text: '#bbbfc5',
  },
  paper: {
    // text: '#bbbfc5',
    text: '#a4a9b0',
    background: '#fff',
    edge: {
      color: '#dfe1e6',
      thickness: '1px',
      radius: '4px'
    }
  },
  header: {
    height: '300px',
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(140, 210, 255, 1) 25%, rgba(88, 189, 255, 1) 75%, rgba(00, 155, 255, 1) 100%)',
  },
};

export { theme };
