import styled from 'styled-components';

import { ThemeProps, ColorType, ColorSelector, withColor, withEdgeBorder } from 'src/theme';

type ButtonProps = ThemeProps & {
  $color: ColorType;
}

// TODO: Promote to Theme Tools!
const withPropsColor = (selector: ColorSelector) => (props: ButtonProps) => {
  return withColor(props.$color, selector)(props);
}

const ButtonContainer = styled.button<ButtonProps>`
  border: ${withEdgeBorder};
  border-radius: 4px;
  color: ${withPropsColor('text')};
  background-color: ${withPropsColor('main')};

  cursor: pointer;

  &:hover {
    background-color: ${withPropsColor('light')};
  }
`;

export { ButtonContainer };
