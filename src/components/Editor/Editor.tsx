import React from 'react';

import { BoxShadowSettingsProvider, IBoxShadowSettings } from 'src/contexts/BoxShadowSettings';

import { BoxShadowSettingsPanel } from 'src/components/BoxShadowSettingsPanel';
import { BoxShadowPreview } from 'src/components/BoxShadowPreview';
import { CodePreview } from 'src/components/CodePreview';
import { Spacer } from 'src/components/Spacer';

import { EditorContainer } from './Editor.styles';

const DEFAULT_SETTINGS: IBoxShadowSettings = {
  horizontal: 4,
  vertical: 4,
  blur: 4,
  spread: 2,
  color: '#000000',
  opacity: 0.5,
  inset: false,
}

const Editor = () => {
  return (
    <BoxShadowSettingsProvider initialSettings={DEFAULT_SETTINGS}>
      <EditorContainer>
        <BoxShadowPreview></BoxShadowPreview>
        <Spacer />
        <BoxShadowSettingsPanel></BoxShadowSettingsPanel>
        <Spacer />
        <CodePreview></CodePreview>
      </EditorContainer>
    </BoxShadowSettingsProvider>
  );
};

export { Editor };
