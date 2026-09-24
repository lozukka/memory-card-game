import { useState, useEffect } from "react";
import { fetchImages } from "../utils/fetchImages";
import { shufflePokemon } from "../utils/shuffleImages";
import Card from "./Card";
import Score from "./Score";
import "../styles/game.css";

function Game() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const POKEMON_IDS = [1, 4, 7, 12, 25, 39, 54, 60, 104, 129, 133, 143];

  const loadPokemon = async () => {
    const results = await Promise.all(POKEMON_IDS.map((id) => fetchImages(id)));
    setPokemonList(results);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  function handleCardClick(id) {
    if (gameOver) return;

    if (clickedIds.has(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setGameOver(true);
    } else {
      setClickedIds((prev) => new Set(prev).add(id));
      setScore((prev) => prev + 1);
      setPokemonList((prev) => shufflePokemon(prev));
    }
  }

  function playAgain() {
    setScore(0);
    setClickedIds(new Set());
    setGameOver(false);
    loadPokemon();
  }

  return (
    <>
      <div id="scorearea">
        <Score score={score} bestScore={bestScore} />
        {gameOver && (
          <button id="playAgainBtn" type="button" onClick={playAgain}>
            Play again
          </button>
        )}
      </div>

      {pokemonList.length === 0 ? (
        <p>Loading Pokemon...</p>
      ) : (
        <div id="gamearea">
          {pokemonList.map((pokemon) => (
            <Card
              key={pokemon.id}
              {...pokemon}
              onCardClick={handleCardClick}
              disabled={gameOver}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Game;
