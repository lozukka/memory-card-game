import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.sprites.front_default);
      });
  }, []);

  return <>{image && <img src={image} alt="ditto" />}</>;
}

export default App;
