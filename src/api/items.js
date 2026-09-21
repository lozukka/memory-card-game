const imageFetchUrl = `https://pokeapi.co/api/v2/pokemon/`;

export async function fetchImages(imgId) {
  const url = `${imageFetchUrl}${imgId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result); //removing this when everything is done correctly
    const image = result.sprites.front_default;
    return image;
  } catch (error) {
    console.error(error.message);
  }
}

// fetch("https://pokeapi.co/api/v2/pokemon/100")
//      .then((response) => response.json())
//      .then((data) => {
//        setImage(data.sprites.front_default);
//        console.log(data.name);
//      });
