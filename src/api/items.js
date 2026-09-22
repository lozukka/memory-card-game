const imageFetchUrl = `https://pokeapi.co/api/v2/pokemon/`;

export async function fetchImages(id) {
  const url = `${imageFetchUrl}${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result); //removing this when everything is done correctly
    const image = result.sprites.other["official-artwork"].front_default;
    const alt = result.name;
    return { id: result.id, image, alt };
  } catch (error) {
    console.error(error.message);
    return { id: null, image: null, alt: null };
  }
}
