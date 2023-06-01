import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <>
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
      <PokemonCard name={pokemonList[1].name} imgSrc={pokemonList[1].imgSrc} />
    </>
   
  );
}

export default App;
