import React from 'react';

import Page from '../components/Page';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CustomLineChart } from '../components/CustomLineChart/CustomLineChart';
import { CustomComponent } from '../components/CustomComponent/CustomComponent';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  return (
    <Page>
      <h1>My Dashboard</h1>
      <FilterBar />
      <section className={styles.lineChartAndCustomComponent}>
        <CustomLineChart className={styles.customLineChart} />
        <CustomComponent className={styles.customComponent} />
      </section>
    </Page>
  );
};
