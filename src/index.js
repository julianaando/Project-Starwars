import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilterProvider } from './context/FilterContext';
import { PlanetProvider } from './context/PlanetContext';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PlanetProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </PlanetProvider>,
  );
