const NavBar = ({ setPokémonIndex, pokemonList }) => {
  const handleClick = (index) => {
    setPokémonIndex(index);
    if (pokemonList[index].name == "pikachu") {
      alert("pika pikachu !!!!");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
