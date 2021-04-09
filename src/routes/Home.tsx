import React from 'react';

import Page from '../components/Page';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CustomLineChart } from '../components/CustomLineChart/CustomLineChart';
import { CustomComponent } from '../components/CustomComponent/CustomComponent';
import styles from './Home.module.scss';
import { Ldm } from '../ldm';

const measures = [Ldm.Revenue];

export const Home: React.FC = () => {
  return (
    <Page>
      <h1>My Dashboard</h1>
      <FilterBar />
      <section className={styles.lineChartAndCustomComponent}>
        <CustomLineChart
          measures={measures}
          className={styles.customLineChart}
        />
        <CustomComponent className={styles.customComponent} />
      </section>
    </Page>
  );
};
