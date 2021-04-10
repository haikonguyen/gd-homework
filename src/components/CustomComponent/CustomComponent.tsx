import React, { FC, useState } from 'react';
import cx from 'classnames';
import { Card } from '../Card/Card';
import styles from './CustomComponent.module.scss';
import { CustomComponentProps } from './types';
import { CustomSelect } from '../CustomSelect/CustomSelect';

export const CustomComponent: FC<CustomComponentProps> = (props) => {
  const { className, measures } = props;
  const [calculationValue, setCalculationValue] = useState('');

  const options = [
    {
      value: 'ocean',
      label: 'Maximum Revenue across different products',
    },
    {
      value: 'blue',
      label: 'Minimum Revenue across different products',
    },
  ];

  return (
    <Card className={cx(styles.CustomComponent, className)}>
      <h2>$456.66</h2>
      <CustomSelect
        options={options}
        onChange={() => console.log('onChange handler comes here')}
      />
    </Card>
  );
};
