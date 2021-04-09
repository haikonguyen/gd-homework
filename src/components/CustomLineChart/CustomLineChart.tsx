import React, { FC } from 'react';
import { LineChart } from '@gooddata/sdk-ui-charts';
import { Ldm } from '../../ldm';

const measures = [Ldm.DateDatasets];

console.log('measures', measures);

export const CustomLineChart: FC = () => {
  return <div>Custom Line Chart</div>;
  // return <LineChart measures={measures} trendBy={Ldm.DateMonth.Short} />;
};
