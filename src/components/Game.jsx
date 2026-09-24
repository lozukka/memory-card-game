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

  const NUM_CARDS = 12;

  const loadPokemon = async () => {
    const randomIds = new Set();
    while (randomIds.size < NUM_CARDS) {
      randomIds.add(Math.floor(Math.random() * 150) + 1);
    }

    const results = await Promise.all(
      [...randomIds].map((id) => fetchImages(id)),
    );
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
      const updatedClickedIds = new Set(clickedIds).add(id);
      setClickedIds(updatedClickedIds);
      setScore((prev) => prev + 1);

      if (updatedClickedIds.size === pokemonList.length) {
        // board cleared — load a fresh set
        setClickedIds(new Set());
        loadPokemon();
      } else {
        setPokemonList((prev) => shufflePokemon(prev));
      }
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
