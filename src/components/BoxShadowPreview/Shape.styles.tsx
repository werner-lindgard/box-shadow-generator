import styled from 'styled-components';

type ShapeContainerProps = {
  $shadow: string;
};

// Use Attrs??
// const Component = styled.div.attrs(props => ({
//   style: {
//     background: props.background,
//   },
// }))`width: 100%;`

const ShapeContainer = styled.div.attrs<ShapeContainerProps>((props) => ({
  style: {
    boxShadow: props.$shadow
  }
}))<ShapeContainerProps>`
  background-color: #08f;

  min-width: 100px;
  min-height: 100px;
`;

export { ShapeContainer };
