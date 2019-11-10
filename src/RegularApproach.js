import React from "react";
import { fetchPokemon, fetchEncounters } from "./api";

export const RegularApproach = () => {
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    fetchPokemon().then(setPokemon);
  }, []);

  if (pokemon === null) {
    return <p>Loading pokemon info...</p>;
  }

  return (
    <>
      <h1>{pokemon.species.name}</h1>
      <img src={pokemon.sprites.front_default} alt="pokemon" />

      <PokemonEncounters />
    </>
  );
};

export const PokemonEncounters = () => {
  const [encounters, setEncounters] = React.useState(null);

  React.useEffect(() => {
    fetchEncounters().then(setEncounters);
  }, []);

  if (encounters === null) {
    return <p>Loading encounters areas...</p>;
  }

  return (
    <ul>
      {encounters.map(encounter => (
        <li key={encounter.location_area.name}>{encounter.location_area.name}</li>
      ))}
    </ul>
  );
};
