import React, { FC } from 'react';
import { CustomDateFilter } from '../CustomDateFilter/CustomDateFilter';
import { Card } from '../Card/Card';
import styles from './FilterBar.module.scss';

export const FilterBar: FC = () => {
  return (
    <Card>
      This is a filter bar section
      <CustomDateFilter className={styles.customDateFilter} />
    </Card>
  );
};
