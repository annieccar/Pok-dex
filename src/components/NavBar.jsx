const NavBar = ({ pokémonIndex, setPokémonIndex, pokemonList }) => {
  const handleIncrease = () => {
    if (pokémonIndex < pokemonList.length - 1) {
      setPokémonIndex(pokémonIndex + 1);
    }
  };
  const handleDecrease = () => {
    if (pokémonIndex > 0) {
      setPokémonIndex(pokémonIndex - 1);
    }
  };

  return (
    <>
      <button onClick={handleDecrease}>Précédent</button>
      <button onClick={handleIncrease}>Suivant</button>
    </>
  );
};

export default NavBar;
