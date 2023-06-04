import PropTypes from "prop-types";
import styles from "./PokemonCard.module.css";

const PokemonCard = (pokemon) => {
  if (pokemon.imgSrc) {
    return (
      <figure
        className={styles.card}
        style={{ backgroundColor: pokemon.color }}
      >
        <img
          className={styles.cardImg}
          src={pokemon.imgSrc}
          alt={`Image of a ${pokemon.name}`}
        />
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
export default PokemonCard;
