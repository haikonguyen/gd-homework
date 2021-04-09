import React, { FC } from 'react';
import cx from 'classnames';
import { Card } from '../Card/Card';
import styles from './CustomComponent.module.scss';
import { CustomComponentProps } from './types';
import { CustomSelect } from '../CustomSelect/CustomSelect';

export const CustomComponent: FC<CustomComponentProps> = (props) => {
  const { className } = props;
  return (
    <Card className={cx(styles.CustomComponent, className)}>
      <h2>$456.66</h2>
      <CustomSelect />
    </Card>
  );
};
