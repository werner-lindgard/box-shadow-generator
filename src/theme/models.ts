interface IColor {
  main: string;
  light: string;
  dark: string;
  text: string;
}

interface IPalette {
  primary: IColor;
  secondary: IColor;
  background: string;
  text: string;
}

interface IEdge {
  color: string;
  thickness: string;
  radius: string;
}

interface IPaper {
  background: string;
  edge: IEdge;
  text: string;
}

interface IHeader {
  height: string;
  background: string;
}

interface ITheme {
  palette: IPalette;
  paper: IPaper;
  header: IHeader;
}

type ThemeProps = {
  theme?: ITheme;
}

// Helper tools

type ColorType = 'primary' | 'secondary';
type ColorSelector = 'main' | 'light' | 'dark' | 'text';
 
const withColor = (type: ColorType, selected: ColorSelector) => ({theme}: ThemeProps) => {
  return `${theme.palette[type][selected]}`;
}

const withEdgeBorder = ({ theme }: ThemeProps) => {
  return `${theme.paper.edge.thickness} solid ${theme.paper.edge.color}`;
};

export type { IColor, IPalette, IPaper, IHeader, ITheme, ThemeProps, ColorType, ColorSelector };
export { withColor, withEdgeBorder };