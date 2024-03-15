import React from 'react';

import { ColorPickerContainer } from './ColorPicker.styles';

type ColorPickerProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
};

const defaultProps = {
  value: '#ffffff',
  onChange: () => {},
};

const ColorPicker = (props: ColorPickerProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.onChange(value);
  };

  return (
    <ColorPickerContainer>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="color"
        id={props.id}
        value={props.value}
        onChange={handleChange}
      ></input>
    </ColorPickerContainer>
  );
};

ColorPicker.defaultProps = defaultProps;

export { ColorPicker };
