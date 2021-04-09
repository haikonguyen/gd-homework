import React, { FC, useState } from 'react';
import {
  DateFilter,
  DateFilterOption,
  defaultDateFilterOptions
} from '@gooddata/sdk-ui-filters';
import { DateFilterGranularity } from '@gooddata/sdk-backend-spi';
import { CustomDateFilterProps } from './types';

const availableGranularities: DateFilterGranularity[] = [
  'GDC.time.date',
  'GDC.time.month',
  'GDC.time.quarter',
  'GDC.time.year'
];

interface IDateFilterComponentExampleState {
  selectedFilterOption: DateFilterOption;
  excludeCurrentPeriod: boolean;
}

export const CustomDateFilter: FC<CustomDateFilterProps> = (props) => {
  const { className } = props;
  const [state] = useState<IDateFilterComponentExampleState>({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    selectedFilterOption: defaultDateFilterOptions.allTime!,
    excludeCurrentPeriod: false
  });
  return (
    <div className={className}>
      <DateFilter
        excludeCurrentPeriod
        selectedFilterOption={state.selectedFilterOption}
        filterOptions={defaultDateFilterOptions}
        availableGranularities={availableGranularities}
        customFilterName="Selected date"
        dateFilterMode="active"
        dateFormat="MM/dd/yyyy"
        onApply={() => console.log('onApply handler')}
      />
    </div>
  );
};
