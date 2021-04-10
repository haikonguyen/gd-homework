import React, { FC } from 'react';
import { DateFilter, defaultDateFilterOptions } from '@gooddata/sdk-ui-filters';
import { DateFilterGranularity } from '@gooddata/sdk-backend-spi';
import { CustomDateFilterProps } from './types';

const availableGranularities: DateFilterGranularity[] = [
  'GDC.time.date',
  'GDC.time.month',
  'GDC.time.quarter',
  'GDC.time.year'
];

export const CustomDateFilter: FC<CustomDateFilterProps> = (props) => {
  const { className, selectedFilterOption, onApply } = props;

  return (
    <div className={className}>
      <DateFilter
        excludeCurrentPeriod
        selectedFilterOption={selectedFilterOption}
        filterOptions={defaultDateFilterOptions}
        availableGranularities={availableGranularities}
        customFilterName="Selected date"
        dateFilterMode="active"
        dateFormat="MM/dd/yyyy"
        onApply={onApply}
      />
    </div>
  );
};
