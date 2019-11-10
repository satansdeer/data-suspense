import React, { Suspense } from "react";
import { fetchPokemon, fetchEncounters } from "./api";

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

const pokemonResource = wrapPromise(fetchPokemon());
const encountersResource = wrapPromise(fetchEncounters());

export const SuspenseApproach = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading pokemon data...</h1>}>
        <PokemonDetails />
      </Suspense>
      <Suspense fallback={<h1>Loading area encounters...</h1>}>
        <EncountersList />
      </Suspense>
    </>
  );
};

function PokemonDetails() {
  const pokemon = pokemonResource.read();
  return (
    <>
      <h1>{pokemon.species.name}</h1>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
    </>
  );
}

function EncountersList() {
  const encounters = encountersResource.read();
  return (
    <ul>
      {encounters.map(encounter => (
        <li key={encounter.location_area.name}>
          {encounter.location_area.name}
        </li>
      ))}
    </ul>
  );
}
