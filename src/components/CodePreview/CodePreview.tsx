import React from 'react';

import { useBoxShadowSettings } from 'src/contexts/BoxShadowSettings';

import { Button, TextArea } from 'src/components/atoms';
import { CodePreviewContainer } from './CodePreview.styles';

const copyToClipboard = async (text: string) => {
  if ('clipboard' in navigator) {
    await navigator.clipboard.writeText(text);
  }
  else {
    // For OLD browsers....
    document.execCommand('copy', true, text);
  }

  alert(`Copied to Clipboard: \n"${text}"`);
}

const CodePreview = () => {
  const [{css}] = useBoxShadowSettings();
  const cssAsString = `${css.key}: ${css.value};`;

  return (
    <CodePreviewContainer>
      <TextArea id="code-preview" value={cssAsString}></TextArea>
      <Button onClick={() => copyToClipboard(cssAsString)}>Copy</Button>
    </CodePreviewContainer>
  );
};

export { CodePreview };
