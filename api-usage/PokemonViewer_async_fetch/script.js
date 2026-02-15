const pokemonInput = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", async () => {
    const name = pokemonInput.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Pokemon not found");
        const data = await response.json();

        const image = data.sprites.front_default;
        const type = data.types[0].type.name;
        result.innerHTML = `
  <h1>${data.name}</h1>
  <img src="${image}" alt="${data.name}"/>
  <p>${type}</p>
  `;
    } catch (err) {
        result.innerHTML = `<div>This Pokémon doesn’t exist or the API is down ${err.message}</div>`;
    }
});