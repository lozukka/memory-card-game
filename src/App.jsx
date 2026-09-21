import { useEffect, useState } from "react";
import { fetchImages } from "./api/items";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [image, setImage] = useState(null);

  return (
    <>
      <Card image={image} setImage={setImage} />
    </>
  );
}

export default App;
