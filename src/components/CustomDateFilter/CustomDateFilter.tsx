import React, { FC, useState } from 'react';
import {
  DateFilter,
  DateFilterOption,
  defaultDateFilterOptions
} from '@gooddata/sdk-ui-filters';
import { DateFilterGranularity } from '@gooddata/sdk-backend-spi';

console.log('defaultDateFilterOptions', defaultDateFilterOptions);

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

export const CustomDateFilter: FC = () => {
  const [state, setState] = useState<IDateFilterComponentExampleState>({
    selectedFilterOption: defaultDateFilterOptions.allTime!,
    excludeCurrentPeriod: false
  });
  return (
    // <div>test</div>
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
  );
};
