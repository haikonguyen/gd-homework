import React, { FC } from 'react';
import { LineChart } from '@gooddata/sdk-ui-charts';

import { Ldm } from '../../ldm';
import { CustomLineChartProps } from './types';
import { Card } from '../Card/Card';

export const CustomLineChart: FC<CustomLineChartProps> = ({
  measures,
  className,
  filters
}) => {
  const style = { height: 300 };

  return (
    <Card style={style} className={className}>
      <LineChart
        measures={measures}
        trendBy={Ldm.DateDatasets.Date.Month.Short}
        segmentBy={Ldm.Product.Default}
        filters={filters}
      />
    </Card>
  );
};
