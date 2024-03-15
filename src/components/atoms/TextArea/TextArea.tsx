import React from 'react';

import { TextAreaContainer } from './TextArea.styles';

type TextAreaProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  // label: string;
};

const defaultProps = {
  value: '',
  onChange: () => {},
};

const TextArea = (props: TextAreaProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    props.onChange(value);
  };

  return (
    <TextAreaContainer rows={2} value={props.value} onChange={handleChange}>
    </TextAreaContainer>
  );
};

TextArea.defaultProps = defaultProps;

export { TextArea };
