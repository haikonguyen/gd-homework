import React, { FC } from 'react';
import { CustomDateFilter } from '../CustomDateFilter/CustomDateFilter';
import { Card } from '../Card/Card';
import styles from './FilterBar.module.scss';

export const FilterBar: FC = () => {
  return (
    <Card>
      <CustomDateFilter className={styles.customDateFilter} />
    </Card>
  );
};
