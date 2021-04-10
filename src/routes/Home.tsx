import React, { useState } from 'react';
import {
  DateFilterHelpers,
  DateFilterOption,
  defaultDateFilterOptions,
} from '@gooddata/sdk-ui-filters';
import Page from '../components/Page';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CustomLineChart } from '../components/CustomLineChart/CustomLineChart';
import { CustomComponent } from '../components/CustomComponent/CustomComponent';
import styles from './Home.module.scss';
import { Ldm } from '../ldm';

const measures = [Ldm.Revenue];

interface IDateFilterComponentExampleState {
  selectedFilterOption: DateFilterOption;
  excludeCurrentPeriod: boolean;
}

export const Home: React.FC = () => {
  const [state, setState] = useState<IDateFilterComponentExampleState>({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    selectedFilterOption: defaultDateFilterOptions.allTime!,
    excludeCurrentPeriod: false,
  });
  const dateFilter = DateFilterHelpers.mapOptionToAfm(
    state.selectedFilterOption,
    Ldm.DateDatasets.Date.ref,
    state.excludeCurrentPeriod
  );

  const onApply = (
    selectedFilterOption: DateFilterOption,
    excludeCurrentPeriod: boolean
  ) => {
    setState({
      selectedFilterOption,
      excludeCurrentPeriod,
    });
  };

  return (
    <Page>
      <h1>{`My Dashboard ${state.selectedFilterOption.localIdentifier}`}</h1>
      <FilterBar
        onApply={onApply}
        selectedFilterOption={state.selectedFilterOption}
      />
      <section className={styles.lineChartAndCustomComponent}>
        <CustomLineChart
          measures={measures}
          className={styles.customLineChart}
          filters={dateFilter ? [dateFilter] : []}
        />
        <CustomComponent
          measures={measures}
          className={styles.customComponent}
        />
      </section>
    </Page>
  );
};
