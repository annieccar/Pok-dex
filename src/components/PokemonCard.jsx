const PokemonCard = (pokemon) => {
  if (pokemon.imgSrc) {
    return (
      <figure>
        <img src={pokemon.imgSrc} alt={`Image of a ${pokemon.name}`} />
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  } else {
    return (
      <figure>
        <p>???</p>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
};

export default PokemonCard;
