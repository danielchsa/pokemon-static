const toggleFavorite = (id: number) => {
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId: number) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toggleFavorite, existInFavorites, pokemons };
