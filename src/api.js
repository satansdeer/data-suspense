export const fetchPokemon = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/132")
    .then(res => res.json())
    .then(
      data =>
        new Promise(resolve => {
          setTimeout(() => resolve(data), 1000);
        })
    );

export const fetchEncounters = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/132/encounters")
    .then(res => res.json())
    .then(
      data =>
        new Promise(resolve => {
          setTimeout(() => resolve(data), 500);
        })
    );
