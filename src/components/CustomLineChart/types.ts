import { IAttributeOrMeasure, INullableFilter } from '@gooddata/sdk-model';

export interface CustomLineChartProps {
  className?: string;
  measures: IAttributeOrMeasure[];
  filters?: INullableFilter[];
}
