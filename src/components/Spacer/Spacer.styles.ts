import styled from "styled-components";
import { ThemeProps, withEdgeBorder } from "src/theme";

const SpacerContainer = styled.div<ThemeProps>`
  border-top: ${withEdgeBorder};
  width: 100%;
  padding: 4px 0px;
`;

export { SpacerContainer };