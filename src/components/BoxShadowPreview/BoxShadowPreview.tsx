import React from 'react';

import { useBoxShadowSettings } from 'src/contexts/BoxShadowSettings';

import { BoxShadowPreviewContainer } from './BoxShadowPreview.styles';
import { Shape } from './Shape';

const BoxShadowPreview = () => {
  const [{css}] = useBoxShadowSettings();

  return (
    <BoxShadowPreviewContainer>
      <Shape shadow={css}></Shape>
    </BoxShadowPreviewContainer>
  );
};

export { BoxShadowPreview };
