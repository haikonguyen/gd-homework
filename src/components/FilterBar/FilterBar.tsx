import React, { FC } from 'react';
import { DateFilterOption } from '@gooddata/sdk-ui-filters/esm/DateFilter/interfaces';
import { CustomDateFilter } from '../CustomDateFilter/CustomDateFilter';
import { Card } from '../Card/Card';
import styles from './FilterBar.module.scss';

export interface FilterBarProps {
  onApply?: (
    dateFilterOption: DateFilterOption,
    excludeCurrentPeriod: boolean
  ) => void;
  selectedFilterOption?: DateFilterOption;
}

export const FilterBar: FC<FilterBarProps> = (props) => {
  const { selectedFilterOption, onApply } = props;
  return (
    <Card>
      <CustomDateFilter
        className={styles.customDateFilter}
        onApply={onApply}
        selectedFilterOption={selectedFilterOption}
      />
    </Card>
  );
};
