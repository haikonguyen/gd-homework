import { DateFilterOption } from '@gooddata/sdk-ui-filters/esm/DateFilter/interfaces';

export interface CustomDateFilterProps {
  className?: string;
  onApply?: (
    dateFilterOption: DateFilterOption,
    excludeCurrentPeriod: boolean
  ) => void;
  selectedFilterOption?: DateFilterOption;
}
