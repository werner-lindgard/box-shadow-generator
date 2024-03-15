import React from 'react';

import { SliderContainer } from './Slider.styles';

type SliderProps = {
  id: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  label: string;
};

const defaultProps = {
  min: -100,
  max: 100,
  step: 1,
  value: 0,
  onChange: () => {},
};

const Slider = (props: SliderProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    props.onChange(value);
  }

  return (
    <SliderContainer>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="range"
        id={props.id}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={handleChange}
      ></input>
    </SliderContainer>
  );
};

Slider.defaultProps = defaultProps;

export { Slider };
