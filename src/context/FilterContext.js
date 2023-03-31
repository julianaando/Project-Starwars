import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterByName, setFilterByName] = useState('');
  const [dropColumn, setDropColumn] = useState('population');
  const [dropComparison, setDropComparison] = useState('maior que');
  const [dropValue, setDropValue] = useState('0');

  const contextFilter = {
    filterByName,
    setFilterByName,
    dropColumn,
    setDropColumn,
    dropComparison,
    setDropComparison,
    dropValue,
    setDropValue,
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
