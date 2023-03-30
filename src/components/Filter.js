import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const {
    // planets,
    dropColumn,
    setColumn,
    dropComparison,
    setComparison,
    dropValue,
    setValue,
    filterByName,
    handleFilter,
  } = useContext(PlanetContext);

  const dropdownKeys = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const dropdownComparisons = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleClick = () => {
    console.log('clicou');
  };

  return (
    <div className="header">
      <h2>Projeto Star Wars Search</h2>
      <label htmlFor="filter">
        <input
          type="text"
          id="filter"
          value={ filterByName }
          onChange={ handleFilter }
          data-testid="name-filter"
          placeholder="Filtrar por nome"
        />
      </label>
      <label htmlFor="filter">
        Coluna
        <select
          name="filter"
          id="filter"
          data-testid="column-filter"
          value={ dropColumn } // valor inicial do select
          onChange={ ({ target }) => setColumn(target.value) } // função que atualiza o estado
        >
          {dropdownKeys.map((key) => (
            <option key={ key } value={ key }>{key}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          value={ dropComparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {dropdownComparisons.map((comparisonValue) => (
            <option
              key={ comparisonValue }
              value={ comparisonValue }
            >
              {comparisonValue}
            </option>
          ))}
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
          onChange={ ({ target }) => setValue(parseFloat(target.value)) }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
