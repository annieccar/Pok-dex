import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokémonIndex, setPokémonIndex] = useState(0);

  return (
    <>
      <NavBar setPokémonIndex={setPokémonIndex} pokemonList={pokemonList} />
      <PokemonCard
        name={pokemonList[pokémonIndex].name}
        imgSrc={pokemonList[pokémonIndex].imgSrc}
      />
    </>
  );
}

export default App;
