import React from 'react';

import { ICssResult } from 'src/contexts/BoxShadowSettings';
import { ShapeContainer } from './Shape.styles';

type ShapeProps = {
  shadow: ICssResult;
}

const Shape = ({ shadow }: ShapeProps) => {
  return <ShapeContainer $shadow={shadow.value}></ShapeContainer>;
};

export { Shape };