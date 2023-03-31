import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PlanetContext = createContext();
function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const context = {
    planets,
    filteredPlanets,
    setFilteredPlanets,
  };

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((data) => {
        const planetsInfo = data.results
          .map((planet) => {
            const newPlanet = { ...planet };
            delete newPlanet.residents;
            return newPlanet;
          });
        setPlanets(planetsInfo);
        setFilteredPlanets(planetsInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export { PlanetContext, PlanetProvider };
