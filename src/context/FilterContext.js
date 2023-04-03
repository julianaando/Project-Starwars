import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { PlanetContext } from './PlanetContext';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterByName, setFilterByName] = useState('');
  const [dropColumn, setDropColumn] = useState('population');
  const [dropComparison, setDropComparison] = useState('maior que');
  const [dropValue, setDropValue] = useState('0');
  const { planets } = useContext(PlanetContext);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const contextFilter = {
    planets,
    filterByName,
    setFilterByName,
    dropColumn,
    setDropColumn,
    dropComparison,
    setDropComparison,
    dropValue,
    setDropValue,
    columnOptions,
    setColumnOptions,
  };

  return (
    <FilterContext.Provider value={ contextFilter }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export { FilterContext, FilterProvider };
