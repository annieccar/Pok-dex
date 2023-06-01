import PokemonCard from "./components/PokemonCard";
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
  const handleIncrease = () => {
    setPokémonIndex(pokémonIndex + 1);
  };
  const handleDecrease = () => {
    setPokémonIndex(pokémonIndex - 1);
  };

  return (
    <>
      <PokemonCard
        name={pokemonList[pokémonIndex].name}
        imgSrc={pokemonList[pokémonIndex].imgSrc}
      />
      <button onClick={handleDecrease}>Précédent</button>
      <button onClick={handleIncrease}>Suivant</button>
    </>
  );
}

export default App;
