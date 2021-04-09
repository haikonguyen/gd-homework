import React, { FC } from 'react';
import { LineChart } from '@gooddata/sdk-ui-charts';
import { Ldm } from '../../ldm';
import { CustomLineChartProps } from './types';

const measures = [Ldm.DateDatasets];

console.log('measures', measures);

export const CustomLineChart: FC<CustomLineChartProps> = ({ className }) => {
  return <div className={className}>Custom Line Chart</div>;
  // return <LineChart measures={measures} trendBy={Ldm.DateMonth.Short} />;
};
