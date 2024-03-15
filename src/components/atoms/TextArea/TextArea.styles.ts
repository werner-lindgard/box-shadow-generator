import styled from "styled-components";

import { ThemeProps, withEdgeBorder } from "src/theme";

const TextAreaContainer = styled.textarea<ThemeProps>`
  resize: none;
  padding: 4px;

  border: ${withEdgeBorder};
  border-radius: 4px;
`;

export { TextAreaContainer };