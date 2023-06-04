import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "#23C26F",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "#ffac00",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color: "#26B0D2",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color: "#F1C716",
  },
  {
    name: "mew",
  },
];

function App() {
  useEffect(() => {
    alert("Hello Pokemon trainer :)");
  }, []);

  const [pokémonIndex, setPokémonIndex] = useState(0);

  return (
    <>
      <NavBar setPokémonIndex={setPokémonIndex} pokemonList={pokemonList} />
      <PokemonCard
        name={pokemonList[pokémonIndex].name}
        imgSrc={pokemonList[pokémonIndex].imgSrc}
        color={pokemonList[pokémonIndex].color}
      />
    </>
  );
}

export default App;
