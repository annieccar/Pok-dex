import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
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

  return (
    <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
  );
}

export default App;
