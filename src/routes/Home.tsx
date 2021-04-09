import React from 'react';

import Page from '../components/Page';
import { FilterBar } from '../components/FilterBar/FilterBar';

const Home: React.FC = () => {
  return (
    <Page>
      <h1>My Dashboard</h1>
      <FilterBar />
    </Page>
  );
};

export default Home;
