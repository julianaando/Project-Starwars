import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planets, filterByName, setFilterByName } = useContext(PlanetContext);

  const handleFilter = (event) => {
    setFilterByName(event.target.value);
  };

  const filteredPlanets = planets.filter((planet) => planet.name.toLowerCase()
    .includes(filterByName.toLowerCase()));

  return (
    <>
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
