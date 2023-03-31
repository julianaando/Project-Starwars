import { useContext, useState } from 'react';
import { FilterContext } from '../context/FilterContext';
import { PlanetContext } from '../context/PlanetContext';

function Filter() {
  const {
    filterByName,
    setFilterByName,
    dropColumn,
    setDropColumn,
    dropComparison,
    setDropComparison,
    dropValue,
    setDropValue,
  } = useContext(FilterContext);

  const { planets, setPlanets } = useContext(PlanetContext);

  const [showFilterResults, setShowFilterResults] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredPlanets = planets.filter((planet) => {
      if (dropComparison === 'maior que') {
        return Number(planet[dropColumn]) > Number(dropValue);
      } if (dropComparison === 'menor que') {
        return Number(planet[dropColumn]) < Number(dropValue);
      } if (dropComparison === 'igual a') {
        return Number(planet[dropColumn]) === Number(dropValue);
      }
      return true;
    });
    setPlanets(filteredPlanets);
    setShowFilterResults(true);
    setAppliedFilters([
      ...appliedFilters,
      `${dropColumn} ${dropComparison} ${dropValue}`,
    ]);
    setDropColumn('population');
    setDropComparison('maior que');
    setDropValue('0');
  };

  return (
    <div className="header">
      <form>
        <h2>Projeto Star Wars Search</h2>
        <label htmlFor="filterName">
          <input
            type="text"
            id="filterName"
            value={ filterByName }
            onChange={ ({ target }) => setFilterByName(target.value) }
            data-testid="name-filter"
            placeholder="Filtrar por nome"
          />
        </label>

        <label htmlFor="filterColumn">
          Coluna
          <select
            name="filter"
            id="filterColumn"
            data-testid="column-filter"
            value={ dropColumn } // valor inicial do select
            onChange={ ({ target }) => setDropColumn(target.value) } // função que atualiza o estado
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          Operador
          <select
            name="comparison"
            id="comparison"
            data-testid="comparison-filter"
            value={ dropComparison }
            onChange={ ({ target }) => setDropComparison(target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            data-testid="value-filter"
            value={ dropValue }
            onChange={ ({ target }) => setDropValue(target.value) }
          />
        </label>
        <button type="submit" data-testid="button-filter" onClick={ handleSubmit }>
          Filtrar
        </button>
      </form>
      {showFilterResults ? (
        <div>
          {appliedFilters.map((filter, index) => (
            <div key={ index }>
              {filter}
              <button
                type="button"
                name="delete-filter"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Filter;
