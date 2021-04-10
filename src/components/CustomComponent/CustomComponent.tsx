import React, { FC, useState } from 'react';
import cx from 'classnames';
import { Card } from '../Card/Card';
import styles from './CustomComponent.module.scss';
import { CustomComponentProps } from './types';
import { CustomSelect } from '../CustomSelect/CustomSelect';

export const CustomComponent: FC<CustomComponentProps> = (props) => {
  const { className, measures } = props;
  const [calculationValue, setCalculationValue] = useState(null);

  const options = [
    {
      value: 'max-value',
      label: 'Maximum Revenue across different products',
    },
    {
      value: 'max-value',
      label: 'Minimum Revenue across different products',
    },
  ];

  console.log('calculationValue', calculationValue);

  const calculationValueHandler = (value: any) => {
    console.log('value', value);
    // setCalculationValue(value.value);
  };

  return (
    <Card className={cx(styles.CustomComponent, className)}>
      <h2>{`$456.66 - ${calculationValue}`}</h2>
      <CustomSelect
        options={options}
        onChange={calculationValueHandler}
        value={calculationValue}
      />
    </Card>
  );
};
