const NavBar = ({ setPokémonIndex, pokemonList }) => {
  const handleClick = (index) => {
    setPokémonIndex(index);
  };

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
};

export default NavBar;
