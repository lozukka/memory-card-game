import { useState, useEffect } from "react";
import Card from "./Card";
import Score from "./Score";
import { fetchImages } from "../api/items";
import "../styles/game.css";

function Game() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadPokemon = async () => {
      const ids = [1, 4, 7, 25, 39, 54, 104, 129, 133, 143];
      const results = await Promise.all(ids.map((id) => fetchImages(id)));
      setPokemonList(results);
    };

    loadPokemon();
  }, []);

  function handleCardClick(id) {
    console.log(id);
  }
  return (
    <>
      <Score />
      <div id="gamearea">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} onCardClick={handleCardClick} />
        ))}
      </div>
    </>
  );
}

export default Game;
