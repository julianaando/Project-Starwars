import { Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PlanetContext from './context/PlanetContext';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((data) => {
        const filteredPlanets = data.results
          .map((planet) => {
            const newPlanet = { ...planet };
            delete newPlanet.residents;
            return newPlanet;
          });
        setPlanets(filteredPlanets);
      })
      .catch((error) => console.error(error));
  }, []);

  const context = {
    planets,
  };

  return (
    <PlanetContext.Provider value={ context }>
      <Switch>
        <Route exact path="/" component={ Table } />
      </Switch>
    </PlanetContext.Provider>
  );
}

export default App;
