import { useEffect, useState } from "react";
import { fetchImages } from "./api/items";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [image, setImage] = useState(null);

  return (
    <>
      <Game image={image} setImage={setImage} />
    </>
  );
}

export default App;
