import styled from 'styled-components';
import { ThemeProps } from 'src/theme';

const withPaper = ({ theme }: ThemeProps) => {
  return `${theme.paper.background}`;
};
const withPaperColor = ({ theme }: ThemeProps) => {
  return `${theme.paper.text}`;
};
const withEdgeBorder = ({ theme }: ThemeProps) => {
  return `${theme.paper.edge.thickness} solid ${theme.paper.edge.color}`;
};
const withEdgeRadius = ({ theme }: ThemeProps) => {
  return `${theme.paper.edge.radius}`;
};

const EditorContainer = styled.div<ThemeProps>`
  color: ${withPaperColor};
  background-color: ${withPaper};
  border: ${withEdgeBorder};
  border-radius: ${withEdgeRadius};

  min-height: 400px;
  min-width: 640px;

  padding: 8px;
`;

export { EditorContainer };
