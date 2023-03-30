import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PlanetContext = createContext();

export function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [dropColumn, setColumn] = useState('population');
  const [dropComparison, setComparison] = useState('maior que');
  const [dropValue, setValue] = useState(0);
  const [allFilters, setAllFilters] = useState(''); // estado que armazena os três filtros

  const handleFilter = (event) => {
    setFilterByName(event.target.value);
  };

  const context = {
    planets,
    filterByName,
    setFilterByName,
    dropColumn,
    setColumn,
    dropComparison,
    setComparison,
    dropValue,
    setValue,
    setAllFilters,
    allFilters,
    handleFilter,
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

export default PlanetContext;
