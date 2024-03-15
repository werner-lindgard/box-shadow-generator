import React from 'react';

import { CheckboxContainer } from './Checkbox.styles';

type CheckboxProps = {
  id: string;
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
};

const defaultProps = {
  value: false,
  onChange: () => {},
};

const Checkbox = (props: CheckboxProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    props.onChange(value);
  }

  return (
    <CheckboxContainer>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="checkbox"
        id={props.id}
        checked={props.value}
        onChange={handleChange}
      ></input>
    </CheckboxContainer>
  );
};

Checkbox.defaultProps = defaultProps;

export { Checkbox };
