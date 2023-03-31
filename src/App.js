import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <FilterProvider>
      <Filter />
      <Table />
    </FilterProvider>
  );
}

export default App;
