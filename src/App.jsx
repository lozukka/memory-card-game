import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <>
      <header>
        <h1>Memory Card Game</h1>
        <p>Click the pictures. If you have already clicked it, game over.</p>
      </header>
      <main>
        <Game />
      </main>
    </>
  );
}

export default App;
