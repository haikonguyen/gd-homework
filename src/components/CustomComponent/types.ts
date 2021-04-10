import { IAttributeOrMeasure } from '@gooddata/sdk-model';

export interface CustomComponentProps {
  className?: string;
  measures: IAttributeOrMeasure[];
}
