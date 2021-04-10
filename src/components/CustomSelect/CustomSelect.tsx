import React, { FC } from 'react';
import Select from 'react-select';
import { CustomSelectProps } from './types';

export const CustomSelect: FC<CustomSelectProps> = (props) => {
  const { onChange, options } = props;
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      name="calculation-select-box"
      options={options}
      defaultValue={options[0]}
      onChange={onChange}
    />
  );
};
