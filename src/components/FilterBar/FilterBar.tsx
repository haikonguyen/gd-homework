import React, { FC } from 'react';
import { CustomDateFilter } from '../CustomDateFilter/CustomDateFilter';
import { Card } from '../../Card/Card';

export const FilterBar: FC = () => {
  return (
    <Card>
      This is a filter bar section
      <CustomDateFilter />
    </Card>
  );
};
